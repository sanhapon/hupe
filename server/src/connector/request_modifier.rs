use hyper::{Request, Body};

pub fn strip_headers(req: &mut Request<Body>) {
    let keys = ["host", "content-length", "transfer-encoding", "accept-encoding", "content-encoding"];
    for key in keys {
        req.headers_mut().remove(key);
    }
}

pub fn change_to_downstream_host(req: &mut Request<Body>, host: String) {
    let uri = req.uri();
    let url_string = match uri.query() {
        None => format!("https://{}{}", host, uri.path()),
        Some(query) => format!("https://{}{}?{}", host, uri.path(), query)
    };

    *req.uri_mut() = url_string.parse().unwrap();
}