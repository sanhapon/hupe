use std::net::SocketAddr;
use std::sync::{Arc, Mutex};

use hyper::Server;
use hyper::http::Error;
use hyper::service::{make_service_fn, service_fn};

mod connector;
mod config;

const MAX_REQ : usize = 18_446_744_073_709_551_000usize;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {

    let configuration = config::configuration::Configuration::get_config().unwrap();
    let port = configuration.server.port.unwrap();

    println!("{:?}", configuration);

    let connector = Arc::new(connector::Connector::new(configuration));

    let number = Arc::new(Mutex::new(0usize));

    let make_service = make_service_fn(move |_con| {
        let connector = connector.clone();
        let number = number.clone();

        async move {
            Ok::<_, Error>(service_fn(move |req| {
                let mut number = number.lock().unwrap();
                *number += 1;
                if *number > MAX_REQ {
                    *number = 0;
                }
                
                let index = *number;
        
                let connector = connector.clone();

                async move {
                    connector.call(req, index, true).await
                }
            }))
        }
        
    });

    let addr = SocketAddr::from(([0,0,0,0], port));
    Server::bind(&addr)
        // .tcp_keepalive(None)
        // .http1_keepalive(false)
        // .http2_keep_alive_interval(None)
        .serve(make_service).await.unwrap();
    Ok(())
}
