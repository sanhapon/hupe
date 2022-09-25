mod config;

use hyper::server::conn::AddrStream;
use hyper::{Body, Request, Response, Server, StatusCode};
use hyper::service::{service_fn, make_service_fn};
use std::{convert::Infallible, net::SocketAddr};
use std::net::IpAddr;

use  config::configuration::{Configuration, Server as ConfigServer};

mod proxy;
use proxy::ReverseProxy;

// fn main() {
//     println!("Hello, world!");
//     let config = Configuration::get_config().unwrap();
//     // Configuration::save_config();
//     println!("{:?}", config);
// }


fn debug_request(req: Request<Body>) -> Result<Response<Body>, Infallible>  {
    let body_str = format!("Not found <br /> {:?}", req);
    Ok(Response::new(Body::from(body_str)))
}

fn find_path(req_uri: &http::uri::Uri, config_server: ConfigServer) -> Option<String> {
    
    let paths = config_server.request_paths.unwrap();
    println!("looking for {}",req_uri.path());

    for (i, request_path) in paths.iter().enumerate() {

        match &request_path.path {
            Some(str) => {
                if req_uri.path().starts_with(str.as_str()) {
                    let fwd_to = format!("http://{}{}", 
                        config_server.down_streams.unwrap()[0],
                        request_path.map_to.as_ref().unwrap()
                    );

                    println!("found and fwd to {}", fwd_to);
                    return Some(fwd_to);
                } else {
                    println!("xxxx {} vs {}", str, req_uri.path());
                }
            },
            None => {}
        }
    }

    println!("not found");
    None
}

async fn handle(client_ip: IpAddr, req: Request<Body>, config_server: ConfigServer) -> Result<Response<Body>, Infallible> {
    let resp  = match find_path(req.uri(), config_server) {
        Some(fwd_to) => {
            match hyper_reverse_proxy::call(client_ip, fwd_to.as_str(), req).await {
                Ok(response) => {
                    println!("ok got response -> {}", response.status());
                    Ok(response)
                }
                Err(error) => {
                    println!("{:?}", error);
                    Ok(Response::builder()
                                  .status(StatusCode::INTERNAL_SERVER_ERROR)
                                  .body(Body::empty())
                                  .unwrap())
                }
            }
        },
        _ => debug_request(req)
    };

    resp
}

#[tokio::main]
async fn main() {
    let config = Configuration::get_config().unwrap();

    println!("{:?}", config.server);
    let bind_addr = format!("127.0.0.1:{:?}", config.server.port.unwrap());
    let addr:SocketAddr = bind_addr.parse().expect("Could not parse ip:port");
    
    let make_svc = make_service_fn(|conn: &AddrStream| {
    let config_server = config.server.clone();        
        let remote_addr = conn.remote_addr().ip();
        async move {
            Ok::<_, Infallible>(service_fn(move |req| handle(remote_addr, req, config_server.clone())))
        }
    });

    let server1 = Server::bind(&addr).serve(make_svc);

    println!("Running server on {:?}", addr);

    if let Err(e) = server1.await {
        eprintln!("server error: {}", e);
    }
}
