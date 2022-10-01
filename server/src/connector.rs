use std::sync::Arc;

use hyper::{Request, Response, Body, Error, Client, client::HttpConnector};
use hyper_tls::HttpsConnector;

#[derive(Debug, Clone)]
pub struct Connector {
    down_streams: Vec<String>,
    client: Client<HttpsConnector<hyper::client::HttpConnector>>,
}

impl Connector {
    pub fn new(down_streams: Vec<String>) -> Connector {
        let https = HttpsConnector::new();
        let client: Client<HttpsConnector<_>, _> = Client::builder().build(https);
        
        Connector { down_streams, client }
    }

    pub async fn call(&self, mut req: Request<Body>, counter: i32) -> Result<Response<Body>, Error> {

        let host = &self.down_streams[counter as usize];
        req.strip_headers();
        req.change_to_downstream_host(host.to_string());

        println!("{}", req.uri());
        self.client.request(req).await
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

