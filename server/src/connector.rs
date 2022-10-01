use hyper::{Request, Response, Body, Error, Client};
use hyper_tls::HttpsConnector;

pub struct Connector {

}

impl Connector {
    pub fn new() -> Connector {
        Connector {}
    }

    pub async fn call(&self, mut req: Request<Body>, host: String) -> Result<Response<Body>, Error> {
        let https = HttpsConnector::new();
        let client: Client<HttpsConnector<_>, _> = Client::builder().build(https);
        
        req.strip_headers();
        req.change_to_downstream_host(host);

        let resp = client.request(req);
        resp.await
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
            None => format!("{}{}", host, uri.path()),
            Some(query) => format!("{}{}?{}", host, uri.path(), query)
        };

        *self.uri_mut() = url_string.parse().unwrap();
    }
}

