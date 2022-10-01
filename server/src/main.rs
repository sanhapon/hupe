use std::net::SocketAddr;

use hyper::Server;
use hyper::http::Error;
use hyper::service::{make_service_fn, service_fn};

mod connector;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {

    let make_service = make_service_fn(|_| async {
        Ok::<_, Error>(service_fn(|req| async {
            let connector = connector::Connector::new();
            let resp = connector.call(req, String::from("https://www.agoda.com")).await;
            resp
        }))
    });

    let addr = SocketAddr::from(([0,0,0,0], 12345));
    Server::bind(&addr).serve(make_service).await.unwrap();
    Ok(())
}
