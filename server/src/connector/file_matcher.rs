use std::{str, fs::File, io::{BufReader, Read, Write}};
use brotlic::CompressorWriter;
use chashmap::CHashMap;
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

    pub fn get_file(&self, request_path: &str) -> Option<Vec<u8>> {
        let key = format!("{}{}", self.file_path, request_path.replace("/js", "").replace("/css", ""));

        if !self.map.contains_key(&key) {
            match File::open(&key) {
                Ok(file) => {
                    println!("read file");
                    let mut reader = BufReader::new(file);
                    let mut buf = Vec::new();
                    let _ = reader.read_to_end(&mut buf);

                    let mut compressor = CompressorWriter::new(Vec::new());
                    compressor.write_all(buf.as_slice());
                    
                    
                    self.map.insert(
                        key.clone(),
                        compressor.into_inner().unwrap()
                    );
                }, 
                Err(e) => {
                    println!("{:?}", e);
                    return None;
                }
            }
        }

        let result = self.map.get(&key).unwrap().to_vec();

        Some(result)

    }
}
