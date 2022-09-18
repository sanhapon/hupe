mod config;

use  config::configuration::Configuration;

fn main() {
    println!("Hello, world!");
    let config = Configuration::get_config().unwrap();
    println!("{:?}", config);
}
