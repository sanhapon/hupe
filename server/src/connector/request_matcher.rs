use std::sync::{Arc, Mutex};

use regex::Regex;

#[derive(Debug, Clone)]
pub struct RequestMatcher {
    config_path_regex: Regex,
    downstream_servers: Arc<Mutex<Vec<String>>>,
    
}

impl RequestMatcher {
    pub fn new(regex_pattern: &str, servers: Vec<String>) -> RequestMatcher {
        RequestMatcher {
            config_path_regex: Regex::new(regex_pattern).unwrap(),
            downstream_servers: Arc::new(Mutex::new(servers))
        }
    }

    pub fn get_downstream_server(&self, index: usize) -> (String, usize) {

        let index = index % self.downstream_servers.lock().unwrap().len();
        let server = &self.downstream_servers.lock().unwrap()[index];
        println!("get index {} --> {} from {:?}", index, server,  self.downstream_servers);
        
        (String::from(server), index)
    }

    pub fn is_match(&self, request_path: &str) -> bool {
       self.config_path_regex.is_match(request_path)
    }

    pub fn remove_downstream_server(&mut self, index: usize) {
        println!("remove {} --> {:?}", index, self.downstream_servers.lock().unwrap()[index]);
        self.downstream_servers.lock().unwrap().remove(index);
    }
}