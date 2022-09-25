use std::{net::SocketAddr, convert::Infallible};

use hyper::{ Client, Server, Request, Response, Body, service::{make_service_fn, service_fn} };

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {

    let https = hyper_tls::HttpsConnector::new();
    let client: Client<_, hyper::Body> = Client::builder().build(https);
    let addr = std::net::SocketAddr::from(([0,0,0,0], 3000));

    let make_service = make_service_fn(|_| async {
        Ok::<_, Infallible>(service_fn(|req:Request<Body>| async {
            Ok::<_, Infallible>(Response::new( Body::from("hello world")))
        }))
    });

    Server::bind(&addr).serve(make_service).await.unwrap();

    // let connector = hyper_tls::HttpsConnector::new();
    // let client = Client::builder().build::<_, hyper::Body>(connector);
    // let resp = client.get("https://www.agoda.com".parse().unwrap()).await.unwrap();
    // let body = resp.into_body();
    // let bytes = hyper::body::to_bytes(body).await.unwrap();
    // let str = std::str::from_utf8(&bytes).unwrap();
    // println!("{}", str);

    Ok(())
}