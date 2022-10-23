use std::{str, fs::File, io::{BufReader, Read, Write}};
use brotlic::CompressorWriter;
use chashmap::CHashMap;
use flate2::{Compression, write::ZlibEncoder};
use http::{Request};
use hyper::Body;
use regex::Regex;

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
            map: CHashMap::new()
        }
    }

    pub fn is_match(&self, request_path: &str) -> bool {
        self.config_path_regex.is_match(request_path)
    }

    pub fn get_file(&self, req: Request<Body>) -> (Option<Vec<u8>>, &str) {
        let mut response_encoding_header: &str = "";
        let encoding = match req.headers().get("Accept-Encoding") {
            Some(v) => {
                let mut str = v.to_str().unwrap();
                if str.contains("br") {
                    str = "br"
                } else if str.contains("gzip") {
                    str = "gzip"
                } else {
                    str = ""
                }
                str
            },
            _ => "",
        };

        let file = format!("{}{}", self.file_path, req.uri().path().replace("/js", "").replace("/css", ""));
        let key = format!("{}{}", encoding, file);

        if !self.map.contains_key(&key) {
            match File::open(&file) {
                Ok(file) => {
                    let mut reader = BufReader::new(file);
                    let mut buf = Vec::new();
                    let _ = reader.read_to_end(&mut buf);

                    let data = match encoding {
                        "br" => {
                            let mut compressor = CompressorWriter::new(Vec::new());
                            compressor.write_all(buf.as_slice());
                            compressor.into_inner().unwrap()
                        },
                        "gzip" => {
                            let mut e = ZlibEncoder::new(Vec::new(), Compression::default());
                            e.write_all(&buf[..]).unwrap();
                            e.finish().unwrap()
                        },
                        _ => buf,
                    };

                    self.map.insert(key.clone(), data);              
                }, 
                Err(e) => {
                    println!("{:?}", e);
                    return (None, "")
                }
            }
        }
        
        // To prevent error: returns a value referencing data owned by the current function
        response_encoding_header = match encoding {
            "br" => "br",
            "gzip" => "gzip",
            _ => ""
        };

        let result = self.map.get(&key).unwrap().to_vec();

        (Some(result), response_encoding_header)

    }

    
}
