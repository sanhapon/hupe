use std::net::SocketAddr;
use std::sync::Arc;

use hyper::Server;
use hyper::http::Error;
use hyper::service::{make_service_fn, service_fn};

mod connector;
mod config;


#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {

    let configuration = config::configuration::Configuration::get_config().unwrap();
    let connector = Arc::new(connector::Connector::new(configuration.server.down_streams.unwrap()));

    let make_service = make_service_fn(move |_| {
        let connector = connector.clone();

        async {
            Ok::<_, Error>(service_fn(move |req| {
                let connector = connector.clone();
                
                async move {
                    connector.call(req, 1).await
                }
            }))
        }
    });

    let addr = SocketAddr::from(([0,0,0,0], 12345));
    Server::bind(&addr).serve(make_service).await.unwrap();
    Ok(())
}
