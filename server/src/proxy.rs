use hyper::{client::HttpConnector, Client};

pub struct ReverseProxy {
    pub client: Client<HttpConnector>,    
}


impl ReverseProxy {
    // pub fn new() -> ReverseProxy {
    //     let connector = HttpConnector::new();
    //     let 
    // }
}