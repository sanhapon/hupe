# Hupe
A reverse proxy in rust which is built on top of hyper. Below are current features:
  * Multi downstreams per request path
  * Retries with next downstreams
  * Automatically checks if down downstream is coming back
  * Supports https/http to downstreams
  * Caches static files (js/css).
  * Supports gzip and brotli compression based on request header for static files
  * Requests logs (log4rs)
    
<br />

# Running with docker #

Mininum prequisite is config.yaml; you will need to volume configuration (config.yaml) to the container, /usr/local/bin/hupe/config.yaml.
Optionally, we can volume static files too (based on configuration)

<br />

#### 1. Edit configuration file (config.yaml) ####

<br />

  ```
  configuration: 
    listening_port: 80
    enable_retry: true
    enable_log: true
    request_paths: 
      - down_streams: 
          - https://www.example.com
          - https://api.localhost2
        map_to: /another
        uri_path: /another/*
      - down_streams: 
          - http://example.com
          - http://api.localhost1
        map_to: /
        uri_path: /*
  ```
Note: above configurations mean:
  * Start hupe and listen on port 80
  * Enable both retry and log
  * Any request path starts with '/another' will forward to https://example.com/another or https://api.localhost2/another
  * Other requests will forward to http://example.com or http://api.localhost1
  * We are using regex for uri_path and ordering request_paths' priority from top to bottom

<br />

#### 2. Container ####

<br />

    - Image from docker hup

    ```
    docker run -p 80:80 -v config.yaml:/usr/local/bin/hupe/config.yaml -v assets:/usr/local/bin/hupe/assets p3go/hupe:v.0.1
    ```
 
    - Build and run docker
    ```
    docker build . -t hupe
    docker run -p 80:80 -v config.yaml:/usr/local/bin/hupe/config.yaml -v assets:/usr/local/bin/hupe/assets hupe
    ```

<hr>

<br />

### Configure config.yaml to map static files ###

<br />

  ```
  configuration: 
    listening_port: 80
    enable_retry: true
    enable_log: true
    request_paths: 
      - down_streams: 
          - http://example.com
          - http://api.localhost1
        map_to: /
        uri_path: /*
      - down_streams: 
          - https://www.example.com
          - http://api.localhost2
        map_to: /another
        uri_path: /another/*
    request_files: 
      - uri_path: /assets/js
        map_to: /usr/local/bin/hupe/assets/js
      - uri_path: /assets/css
        map_to: /usr/local/bin/hupe/assets/css
  ```
  Note: this time we forward any request starting with '/assets/js' to directory '/usr/local/bin/hupe/assets/js', for example, 'http://localhost/assets/js/index.js', we map (or read) to file system: '/usr/local/bin/hupe/assets/js/index.js'
