use serde::{Serialize, Deserialize};
use std::{fs};


pub type ConfigurationSection = Vec<ConfigurationElement>;

#[derive(Serialize, Deserialize, Debug)]
pub struct ConfigurationElement {
    #[serde(rename = "configuration")]
    configuration: Vec<Configuration>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Configuration {
    #[serde(rename = "server")]
    pub server: Server,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Server {
    #[serde(rename = "port")]
    pub port: i64,

    #[serde(rename = "enable_retry")]
    pub enable_retry: bool,

    #[serde(rename = "down_streams")]
    pub down_streams: Vec<String>,
}

impl Configuration {
    pub fn get_config() -> Result<ConfigurationSection, Box<dyn std::error::Error>> {
        let yaml= fs::read_to_string("config.yaml".to_string()).expect("Unnable to find config.yaml");
        let config: ConfigurationSection = serde_yaml::from_str(&yaml)?;
        Ok(config)
    }
}
