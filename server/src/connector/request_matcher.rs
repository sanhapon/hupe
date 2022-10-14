use regex::Regex;

#[derive(Debug, Clone)]
pub struct RequestMatcher {
    config_path_regex: Regex,
    downstream_servers: Vec<String>,
}

impl RequestMatcher {
    pub fn new(regex_pattern: &str, servers: Vec<String>) -> RequestMatcher {
        RequestMatcher {
            config_path_regex: Regex::new(regex_pattern).unwrap(),
            downstream_servers: servers
        }
    }

    pub fn get_downstream_server(&self, index: usize) -> &String {
        let x = &self.downstream_servers[0];
        x
    }

    pub fn is_match(&self, request_path: &str) -> bool {
       self.config_path_regex.is_match(request_path)
    }
}