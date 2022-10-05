use std::{convert::Infallible, borrow::Borrow};

use hyper::{Request, Response, Body, Client};
use hyper_tls::HttpsConnector;
use regex::Regex;


use crate::config::configuration::{Configuration};

#[derive(Debug, Clone)]
struct RequestMatcher {
    config_path_regex: Regex,
    downstream_servers: Vec<String>,
}

impl RequestMatcher {
    fn new(regex_pattern: &str, servers: Vec<String>) -> RequestMatcher {
        println!("New RequestMacher {} {:?}", regex_pattern, servers);
        RequestMatcher {
            config_path_regex: Regex::new(regex_pattern).unwrap(),
            downstream_servers: servers
        }
    }
}

#[derive(Debug, Clone)]
pub struct Connector {
    request_matchers: Vec<RequestMatcher>,
    client: Client<HttpsConnector<hyper::client::HttpConnector>>,
}

impl Connector {
    pub fn new(configuration: Configuration) -> Connector {
        let https = HttpsConnector::new();
        let client: Client<HttpsConnector<_>, _> = Client::builder()
        .http2_keep_alive_interval(None)
        .build(https);
        
        let request_matchers: Vec<RequestMatcher> = configuration.server.request_paths
            .unwrap()
            .iter()
            .map(|rp| {
                let regex_pattern = rp.uri_path.as_ref().unwrap().as_str();
                let servers = rp.downstreams.as_ref().unwrap().clone();
                let rm = RequestMatcher::new(regex_pattern, servers);
                rm
            }).collect();
            
        Connector { client, request_matchers }
    }

    pub async fn call(&self, mut req: Request<Body>, mut counter: usize) -> Result<Response<Body>, hyper::Error> {
    
        let matcher = 
            self.request_matchers
            .iter()
            .find(|r| r.config_path_regex.is_match(req.uri().path()));
        

        match matcher {
            Some( m) => {

                let servers = &m.downstream_servers;
                let index =  counter % servers.len();
                let host = &servers[index];
                req.change_to_downstream_host(host.to_string());
                req.strip_headers();


                let headers = req.headers().clone();
                let version = req.version();
                let method = req.method().clone();
                let bytes = hyper::body::to_bytes(req.into_body()).await.unwrap();

                loop {
                    let body = hyper::body::Body::from(bytes.clone());
                    let mut req2 = Request::new(body);
                    *req2.headers_mut() = headers.clone();
                    *req2.version_mut() = version;
                    *req2.method_mut()= method.clone();
             
                    let index =  counter % servers.len();
                    println!("index: {index}");
                    let host = &servers[index];
                    req2.change_to_downstream_host(host.to_string());
                    let x = self.client.request(req2).await;
                    if x.is_err() {
                        counter +=1;
                        continue;
                    }
                    
                    return x;
                }
            }, 
            _ => {
                let mut resp = Response::new(Body::from(""));
                *resp.status_mut() = http::status::StatusCode::NOT_FOUND;
                Ok::<_, hyper::Error>(resp)
            }
        }

    }


    fn mark_down_stream_broken(server_name: String) {

    }
}

trait RequestFn {
    fn strip_headers(&mut self);
    fn change_to_downstream_host(&mut self, host: String);
}

impl RequestFn for Request<Body> {
    fn strip_headers(&mut self) {
        let keys = ["host", "content-length", "transfer-encoding", "accept-encoding", "content-encoding"];
        for key in keys {
            self.headers_mut().remove(key);
        }
    }

    fn change_to_downstream_host(&mut self, host: String) {
        let uri = self.uri();
        let url_string = match uri.query() {
            None => format!("https://{}{}", host, uri.path()),
            Some(query) => format!("https://{}{}?{}", host, uri.path(), query)
        };

        *self.uri_mut() = url_string.parse().unwrap();
    }
}

