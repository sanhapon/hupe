use std::{sync::{Arc, Mutex}, time::Duration};

use regex::Regex;

#[derive(Debug, Clone)]
pub struct RequestMatcher {
    config_path_regex: Regex,
    downstream_servers: Arc<Mutex<Vec<String>>>
}

impl RequestMatcher {
    pub fn new(regex_pattern: &str, servers: Vec<String>) -> RequestMatcher {
        RequestMatcher {
            config_path_regex: Regex::new(regex_pattern).unwrap(),
            downstream_servers: Arc::new(Mutex::new(servers))
        }
    }

    pub fn is_match(&self, request_path: &str) -> bool {
        self.config_path_regex.is_match(request_path)
    }

    pub fn get_downstream_server(&self, index: usize) -> (String, usize) {
        let index = index % self.downstream_servers.lock().unwrap().len();
        let server = &self.downstream_servers.lock().unwrap()[index];
        
        (String::from(server), index)
    }

    pub fn remove_downstream_server(&mut self, index: usize) {
        let mut list = self.downstream_servers.lock().unwrap();
        
        if list.len() > 1 {
            let to_check_server = list.get(index).unwrap().clone();
            list.remove(index);
            
            let arc = self.downstream_servers.clone();

            std::thread::spawn(move ||{
                std::thread::sleep(Duration::from_secs(30));
                let mut list = arc.lock().unwrap();
                list.push(to_check_server);
            });
        } else {
            println!("Warning: cannot remove the last downstream server, at least 1 server needed.");
        }
    }
}
