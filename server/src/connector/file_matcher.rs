use std::{str, fs::File, io::{BufReader, Read}};
use chashmap::CHashMap;
use regex::Regex;

#[derive(Debug, Clone)]
pub struct FileMatcher {
    config_path_regex: Regex,
    file_path: String,
    map: CHashMap<String, String>,
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

    pub fn get_file(&self, request_path: &str) -> Option<String> {
        let key = format!("{}{}", self.file_path, request_path.replace("/js", "").replace("/css", ""));

        if !self.map.contains_key(&key) {
            match File::open(&key) {
                Ok(file) => {
                    println!("read file");
                    let mut reader = BufReader::new(file);
                    let mut buf = Vec::new();
                    let _ = reader.read_to_end(&mut buf);
                    self.map.insert(key.clone(), str::from_utf8(&buf).unwrap().to_string());
                }, 
                Err(e) => {
                    println!("{:?}", e);
                    return None;
                }
            }
        }

        let result = self.map.get(&key).unwrap();
        Some(result.to_string())

    }
}
