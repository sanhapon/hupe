use std::net::SocketAddr;
use std::sync::{Arc, Mutex};

use hyper::Server;
use hyper::http::Error;
use hyper::service::{make_service_fn, service_fn};

mod connector;
mod config;


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {

    let configuration = config::configuration::Configuration::get_config().unwrap();
    let connector = Arc::new(connector::Connector::new(configuration.server.down_streams.unwrap()));

    let number = Arc::new(Mutex::new(0 as i32));

    let make_service = make_service_fn(move |_con| {
        let connector = connector.clone();
        let mut number = number.lock().unwrap();
        *number += 1;
        

        if *number >= connector.down_streams.len() as i32 {
            *number = 0;
        }   
        let mut index = *number;
        
        async move {
            Ok::<_, Error>(service_fn(move |req| {
                let connector = connector.clone();

                async move {
                    connector.call(req, index).await
                }
            }))
        }
        
    });

    let addr = SocketAddr::from(([0,0,0,0], 12345));
    Server::bind(&addr).serve(make_service).await.unwrap();
    Ok(())
}
