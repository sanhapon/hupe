use http::{HeaderMap, Method, Version};
use hyper::{Request, Response, Body, Client, body::Bytes};
use hyper_tls::HttpsConnector;

mod request_modifier;
mod request_matcher;
mod file_matcher;

use request_matcher::RequestMatcher;
use file_matcher::FileMatcher;
use crate::config::configuration::{Configuration};

#[derive(Debug, Clone)]
pub struct Connector {
    enable_retry: bool,
    request_matchers: Vec<RequestMatcher>,
    client: Client<HttpsConnector<hyper::client::HttpConnector>>,
    file_matchers: Vec<FileMatcher>,
}

impl Connector {
    pub fn new(configuration: Configuration) -> Connector {
        let https = HttpsConnector::new();
        let client: Client<HttpsConnector<_>, _> = Client::builder()
        .http2_keep_alive_interval(None)
        .build(https);
        
        let request_matchers: Vec<RequestMatcher> = configuration.server.request_paths.unwrap().iter()
            .map(|rp| {
                let regex_pattern = rp.uri_path.as_ref().unwrap().as_str();
                let servers = rp.downstreams.as_ref().unwrap().clone();
                let rm = RequestMatcher::new(regex_pattern, servers);
                rm
            }).collect();

        let file_matchers: Vec<FileMatcher> = configuration.server.request_files.unwrap().iter()
            .map(|rp| {
                let regex_pattern = rp.uri_path.as_ref().unwrap().as_str();
                let file_path = rp.map_to.as_ref().unwrap();
                FileMatcher::new(regex_pattern, file_path.to_string())
            }).collect();
        
            
        Connector { enable_retry: configuration.server.enable_retry.unwrap(), client, request_matchers, file_matchers }
    }

    pub async fn call(&self, req: Request<Body>, counter: usize) -> Result<Response<Body>, hyper::Error> {

        let matcher = self.file_matchers.iter()
            .find(|r| r.is_match(req.uri().path()));

        match matcher {
            Some(m) => {
                let content = m.get_file(req.uri().path());
                if content.is_none() {
                    return self.not_found()
                }

                let mut resp = Response::new(Body::from(content.unwrap()));
                *resp.status_mut() = http::status::StatusCode::OK;
                Ok::<_, hyper::Error>(resp)
            }, 
            None => {
                // then check if it match downstrem path
                self.call_downstream(req, counter).await
            }
        }
    }

    async fn call_downstream(&self, req: Request<Body>, counter: usize) -> Result<Response<Body>, hyper::Error> {
        let matcher = 
                    self.request_matchers
                    .iter()
                    .find(|r| r.is_match(req.uri().path()));
    
        match matcher {
            Some(m) => {
                self.request_downstream(counter, req, m.clone()).await
            }, 
            _ => {
                self.not_found()
            }
        }
    }

    async fn request_downstream(&self, mut counter: usize, mut req: Request<Body>, mut request_matcher: RequestMatcher) -> Result<Response<Body>, hyper::Error> {
        if !self.enable_retry {
            let server = &mut request_matcher.get_downstream_server(counter);

            request_modifier::change_to_downstream_host(&mut req, server);
            request_modifier::strip_headers(&mut req);

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
                let server = &mut request_matcher.get_downstream_server(counter);

                println!("{} - {}", counter, server);

                let req= self.build_request(bytes.clone(), headers.clone(), version, method.clone(), server);
                let result = self.client.request(req).await;

                match result {
                    Ok(r) => return Ok(r),
                    Err(e) => {
                        println!("{}", e.message());
                        request_matcher.remove_downstream_server(counter);
                        counter = counter + 1;
                    }
                }             
            }

        }
    } 

    fn build_request(&self, bytes: Bytes, headers: HeaderMap, version: Version, method: Method, server: &String) -> Request<Body> {
        let body = hyper::body::Body::from(bytes);
        let mut req = Request::new(body);
        *req.headers_mut() = headers;
        *req.version_mut() = version;
        *req.method_mut()= method;
 
        request_modifier::change_to_downstream_host(&mut req, server);
        request_modifier::strip_headers(&mut req);
        req
    }

    fn not_found(&self) -> Result<Response<Body>, hyper::Error> {
        let mut resp = Response::new(Body::from(""));
        *resp.status_mut() = http::status::StatusCode::NOT_FOUND;
        Ok::<_, hyper::Error>(resp)
    }
}
