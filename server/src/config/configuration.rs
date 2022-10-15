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

    #[serde(rename = "file_root_path")]
    pub file_root_path: Option<String>,

    #[serde(rename = "request_files")]
    pub request_files: Option<Vec<RequestPath>>,

    #[serde(rename = "brotli_compress")]
    pub brotli_compress: Option<bool>,
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

    // pub fn save_config() {
    //     let rp1 = RequestPaths {
    //         path: Some("/hotels".to_string()),
    //         map_to: Some("/".to_string())
    //     };
    //     let rp2 = RequestPaths {
    //         path: Some("/hotels".to_string()),
    //         map_to: Some("/".to_string())
    //     };
    //     let s1 = Server {
    //         port: Some(12345),
    //         enable_retry: Some(true),
    //         down_streams: Some(vec!["www.agoda.com".to_string(), "www.booking.com".to_string()]),
    //         request_paths: Some(vec![rp1, rp2])
    //     };

    //     let c = Configuration {
    //         server: s1
    //     };

    //     let str = serde_yaml::to_string(&c).unwrap();
    //     println!("{}", str);
    // }
}
