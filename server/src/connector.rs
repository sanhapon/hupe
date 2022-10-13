use std::{sync::Arc};

use http::{HeaderMap, Method, Version};
use hyper::{Request, Response, Body, Client, body::Bytes, client::ResponseFuture};
use hyper_tls::HttpsConnector;
use regex::Regex;


use crate::config::configuration::{Configuration};

mod request_modifier;

#[derive(Debug, Clone)]
struct RequestMatcher {
    config_path_regex: Regex,
    downstream_servers: Arc<Vec<String>>,
}

impl RequestMatcher {
    fn new(regex_pattern: &str, servers: Vec<String>) -> RequestMatcher {
        RequestMatcher {
            config_path_regex: Regex::new(regex_pattern).unwrap(),
            downstream_servers: Arc::new(servers)
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
    pub async fn call(&self, mut req: Request<Body>, mut counter: usize, enable_retry: bool) -> Result<Response<Body>, hyper::Error> {
        let matcher = 
            self.request_matchers
            .iter()
            .find(|r| r.config_path_regex.is_match(req.uri().path()));
        
        match matcher {
            Some( m) => {
                let servers = &m.downstream_servers;
                let index =  counter % servers.len();
                let host = &servers[index];

                request_modifier::change_to_downstream_host(&mut req, host.to_string());
                request_modifier::strip_headers(&mut req);

                self.request_downstream(enable_retry, counter, req, servers).await
            }, 
            _ => {
                let mut resp = Response::new(Body::from(""));
                *resp.status_mut() = http::status::StatusCode::NOT_FOUND;
                Ok::<_, hyper::Error>(resp)
            }
        }
    }

    async fn request_downstream(&self, enable_retry: bool, mut counter: usize, req: Request<Body>, servers: &Arc<Vec<String>>) -> Result<Response<Body>, hyper::Error> {
        if !enable_retry {
            match self.client.request(req).await {
                Ok(r) => Ok(r),
                Err(_e) => {
                    let mut resp = Response::new(Body::from("Bad Gateway Error"));
                    *resp.status_mut() = http::status::StatusCode::BAD_GATEWAY;
                    Ok::<_, hyper::Error>(resp)
                }
            }
        }
        else {
            let headers = req.headers().clone();
            let method = req.method().clone();
            let version = req.version();
            let bytes = hyper::body::to_bytes(req.into_body()).await.unwrap();

            loop {
                
                let result= self.send_request(bytes.clone(), headers.clone(), version, method.clone(), counter, &servers).await;
                if result.is_err() {
                    counter +=1;
                    continue;
                }
                
                return result;
            }
        }
    } 

    fn send_request(&self, bytes: Bytes, headers: HeaderMap, version: Version, method: Method, counter: usize, servers: &Vec<String>) -> ResponseFuture {
        let body = hyper::body::Body::from(bytes);
        let mut req2 = Request::new(body);
        *req2.headers_mut() = headers;
        *req2.version_mut() = version;
        *req2.method_mut()= method;
 
        let index =  counter % servers.len();
        let host = &servers[index];
        request_modifier::change_to_downstream_host(&mut req2, host.to_string());

        self.client.request(req2)
    }
}
