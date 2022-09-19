mod config;

use hyper::server::conn::AddrStream;
use hyper::{Body, Request, Response, Server, StatusCode};
use hyper::service::{service_fn, make_service_fn};
use std::{convert::Infallible, net::SocketAddr};
use std::net::IpAddr;

use  config::configuration::{Configuration, Server as ConfigServer};

// fn main() {
//     println!("Hello, world!");
//     let config = Configuration::get_config().unwrap();
//     // Configuration::save_config();
//     println!("{:?}", config);
// }


fn debug_request(req: Request<Body>) -> Result<Response<Body>, Infallible>  {
    let body_str = format!("{:?}", req);
    Ok(Response::new(Body::from(body_str)))
}

fn find_path(req_uri: &http::uri::Uri, config_server: ConfigServer) -> Option<String> {
    let mut found = false;
    for (i, config) in config_server.request_paths.unwrap().iter().enumerate() {
        let str = config.path.unwrap().as_str();
        if req_uri.path().starts_with(str) {
            return Some(String::from(str));
        }
    }
    None
}

async fn handle(client_ip: IpAddr, req: Request<Body>, config_server: ConfigServer) -> Result<Response<Body>, Infallible> {
    match find_path(req.uri(), config_server) {
        Some(path) => {
            match hyper_reverse_proxy::call(client_ip, "http://127.0.0.1:13901", req).await {
                Ok(response) => {Ok(response)}
                Err(_error) => {Ok(Response::builder()
                                  .status(StatusCode::INTERNAL_SERVER_ERROR)
                                  .body(Body::empty())
                                  .unwrap())}
            }
        },
        _ => debug_request(req)
    }
}

#[tokio::main]
async fn main() {
    let config = Configuration::get_config().unwrap();

    let bind_addr = format!("127.0.0.1:{:?}", config.servers[0].port);
    let addr:SocketAddr = bind_addr.parse().expect("Could not parse ip:port.");

    let make_svc = make_service_fn(|conn: &AddrStream| {
        let server = config.servers[0].clone();
        let remote_addr = conn.remote_addr().ip();
        async move {
            Ok::<_, Infallible>(service_fn(move |req| handle(remote_addr, req, server)))
        }
    });

    let server1 = Server::bind(&addr).serve(make_svc);

    println!("Running server on {:?}", addr);

    if let Err(e) = server1.await {
        eprintln!("server error: {}", e);
    }
}