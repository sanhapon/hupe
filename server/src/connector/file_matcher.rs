use std::{str, fs::File, io::{BufReader, Read, Write}};
use brotlic::CompressorWriter;
use chashmap::CHashMap;
use flate2::{Compression, write::ZlibEncoder};
use http::{Request};
use hyper::Body;
use regex::Regex;
use log::warn;

const BR : &str = "br";
const GZIP : &str = "gzip";

#[derive(Debug, Clone)]
pub struct FileMatcher {
    config_path_regex: Regex,
    file_path: String,
    map: CHashMap<String, Vec<u8>>,
}

impl FileMatcher {
    pub fn new(regex_pattern: &str, file_path: String) -> FileMatcher {
        FileMatcher {
            config_path_regex: Regex::new(regex_pattern).unwrap(),
            file_path: file_path,
            map: CHashMap::new(),
        }
    }

    pub fn is_match(&self, request_path: &str) -> bool {
        self.config_path_regex.is_match(request_path)
    }

    pub fn get_file(&self, req: Request<Body>) -> (Option<Vec<u8>>, String) {
        let encoding = match req.headers().get("Accept-Encoding") {
            Some(v) => {
                let mut str = v.to_str().unwrap();
                if str.contains(BR) {
                    str = BR
                } else if str.contains(GZIP) {
                    str = GZIP
                } else {
                    str = ""
                }
                str
            },
            _ => "",
        };

        // Posibly bug to refer to /js or /css from request
        let file = format!("{}{}", self.file_path, req.uri().path().replace("/js", "").replace("/css", ""));
        let key = format!("{}{}", encoding, file);

        if !self.map.contains_key(&key) {
            match File::open(&file) {
                Ok(file) => {
                    let mut reader = BufReader::new(file);
                    let mut buf = Vec::new();
                    let _ = reader.read_to_end(&mut buf);

                    let data = match encoding {
                        BR => {
                            let mut compressor = CompressorWriter::new(Vec::new());
                            let _ = compressor.write_all(buf.as_slice());
                            compressor.into_inner().unwrap()
                        },
                        GZIP => {
                            let mut e = ZlibEncoder::new(Vec::new(), Compression::default());
                            e.write_all(&buf[..]).unwrap();
                            e.finish().unwrap()
                        },
                        _ => buf,
                    };

                    self.map.insert(key.clone(), data);              
                }, 
                Err(e) => {
                    warn!("{:?}", e);
                    return (None, String::from(""))
                }
            }
        }

        let result = self.map.get(&key).unwrap().to_vec();
        (Some(result), String::from(encoding))

    }    
}
