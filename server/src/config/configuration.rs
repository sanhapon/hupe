use serde::{Serialize, Deserialize};
use std::{fs};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Configuration {
    #[serde(rename = "configuration")]
    pub server: Server,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Server {
    #[serde(rename = "listening_port")]
    pub port: Option<u16>,

    #[serde(rename = "enable_retry")]
    pub enable_retry: Option<bool>,

    #[serde(rename = "request_paths")]
    pub request_paths: Option<Vec<RequestPath>>,

    #[serde(rename = "request_files")]
    pub request_files: Option<Vec<RequestPath>>,

    #[serde(rename = "brotli_compress")]
    pub brotli_compress: Option<bool>,

    #[serde(rename = "enable_log")]
    pub enable_log: Option<bool>,
}

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct RequestPath {
    #[serde(rename = "down_streams")]
    pub downstreams: Option<Vec<String>>,

    #[serde(rename = "uri_path")]
    pub uri_path: Option<String>,

    #[serde(rename = "map_to")]
    pub map_to: Option<String>,
}

impl Configuration {
    pub fn get_config() -> Result<Configuration, Box<dyn std::error::Error>> {
        let yaml= fs::read_to_string("config.yaml".to_string()).expect("Unnable to find config.yaml");
        let config: Configuration = serde_yaml::from_str(&yaml)?;
        Ok(config)
    }
}
