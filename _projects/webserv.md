---
layout: project
title: "WebServ"
description: "A high-performance HTTP/1.1 server built in C++98 with non-blocking I/O and CGI support"
github_url: "https://github.com/ValGSgit/webserv"
language: "C++"
language_color: "#f34b7d"
tech_stack:
  - C++98
  - HTTP/1.1
  - epoll
  - CGI
  - Python
  - PHP
key_features:
  - Non-blocking I/O with epoll multiplexing
  - Multiple simultaneous server instances
  - CGI script execution (Python, PHP, Perl, Ruby, Shell)
  - File upload and download support
  - Custom error pages
  - NGINX-inspired configuration syntax
file_structure: |
  webserv/
  ├── src/
  │   ├── main.cpp
  │   ├── server/
  │   │   └── ServerManager.cpp
  │   ├── http/
  │   │   ├── HttpHandler.cpp
  │   │   ├── HttpRequest.cpp
  │   │   └── HttpResponse.cpp
  │   ├── config/
  │   │   └── ConfigParser.cpp
  │   └── cgi/
  │       └── CgiHandler.cpp
  ├── includes/
  │   └── webserv.hpp
  ├── config/
  │   └── default.conf
  ├── www/
  │   ├── index.html
  │   ├── cgi-bin/
  │   └── uploads/
  └── tests/
      └── scripts/
---

# 🌐 WebServ

### *A High-Performance HTTP/1.1 Server in C++98*

[![C++98](https://img.shields.io/badge/C++-98-00599C?style=for-the-badge&logo=c%2B%2B)](https://en.cppreference.com/w/cpp/98)
[![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)](https://www.linux.org/)
[![epoll](https://img.shields.io/badge/epoll-I%2FO-green?style=for-the-badge)](https://man7.org/linux/man-pages/man7/epoll.7.html)

*Built from scratch with non-blocking I/O, epoll multiplexing, and full CGI support*

---

## ✨ Features

| 🔥 Core Features | 🎯 Advanced Features | 🛡️ Reliability |
|-----------------|---------------------|----------------|
| **HTTP/1.1 Protocol** | **CGI Execution** | **Non-blocking I/O** |
| GET, POST, DELETE | Python, PHP, Perl, Ruby, Shell | Event-driven epoll |
| **Multiple Ports** | **File Upload** | **Connection Pooling** |
| Simultaneous servers | Multipart form data | Efficient resource usage |
| **Static Files** | **Redirections** | **Error Handling** |
| HTML, CSS, JS, images | 301, 302 redirects | Custom error pages |
| **Directory Listing** | **Virtual Hosts** | **Graceful Shutdown** |
| Autoindex on/off | Server name routing | SIGINT/SIGTERM handling |

### 🌟 Highlights

- ⚡ **Blazing Fast**: Built with Linux `epoll` for maximum I/O efficiency
- 🔧 **NGINX-inspired**: Configuration syntax similar to industry standards
- 🎨 **Modern Web**: Serves HTML5, CSS3, JavaScript with proper MIME types
- 🐍 **CGI Ready**: Execute Python, PHP, Perl, Ruby, and Shell scripts
- 📁 **File Management**: Upload, download, and delete files via HTTP
- 🛠️ **Developer Friendly**: Extensive test suite with 60+ automated tests
- 🔒 **Production Ready**: Handles concurrent connections with timeout management

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/ValGSgit/webserv.git
cd webserv

# Build the server
make

# Run with default configuration
./webserv config/default.conf
```

**🎉 Server is now running on http://localhost:8080 🎉**

### Your First Requests

```bash
# Test static file serving
curl http://localhost:8080/

# Test CGI script
curl http://localhost:8080/cgi-bin/test.py

# Test with query parameters
curl "http://localhost:8080/cgi-bin/test.py?name=WebServ&status=awesome"

# Upload a file
curl -X POST -F "file=@myfile.txt" http://localhost:8080/upload

# Delete a file
curl -X DELETE http://localhost:8080/uploads/myfile.txt
```

---

## ⚙️ Configuration

WebServ uses an **NGINX-style configuration syntax**:

### Basic Example

```nginx
server {
    listen 8080;
    server_name localhost;
    root ./www;
    index index.html;
    client_max_body_size 10485760;  # 10MB
    
    error_page 404 /error_pages/404.html;
    error_page 500 /error_pages/500.html;
    
    location / {
        allow_methods GET POST DELETE;
        autoindex on;
    }
    
    location /upload {
        allow_methods POST DELETE;
        upload_pass ./www/uploads;
        client_max_body_size 52428800;  # 50MB
    }
    
    location /cgi-bin {
        allow_methods GET POST;
        root ./www/cgi-bin;
        cgi_extension .py .php .pl .rb .sh;
    }
}
```

---

## 🧪 Testing

### Quick Test

```bash
# Terminal 1: Start the server
./webserv config/default.conf

# Terminal 2: Run all tests
cd tests/scripts
./run_all_tests.sh
```

### Test Coverage

- ✅ **Functional Tests** (45+ tests): Static files, HTTP methods, error handling
- ✅ **CGI Tests** (12 tests): Environment variables, query strings, POST data
- ✅ **Stress Tests** (6 suites): Concurrent connections, rapid requests, large files
- ✅ **Performance**: 1000+ req/s throughput, <50ms response time

---

## 🏗️ Architecture

### System Design

```
┌─────────────────────────────────────────┐
│            WebServ Server               │
│  ┌───────────────────────────────────┐  │
│  │      ServerManager                │  │
│  │  • Manages epoll event loop       │  │
│  │  • Handles multiple server sockets│  │
│  │  • Tracks client connections      │  │
│  └──────────┬────────────────────────┘  │
│             │                            │
│  ┌──────────▼──────────────────────┐    │
│  │      HttpHandler                │    │
│  │  • Parses HTTP requests         │    │
│  │  • Routes to handlers           │    │
│  │  • Generates responses          │    │
│  └─┬───────────┬─────────┬─────────┘    │
│    │           │         │               │
│    ▼           ▼         ▼               │
│  Static      CGI      Upload             │
│  Files     Handler   Handler             │
└─────────────────────────────────────────┘
```

### Core Components

1. **ServerManager**: Creates and manages multiple server sockets, initializes epoll
2. **HttpHandler**: Accepts connections, reads requests, writes responses
3. **ConfigParser**: Parses NGINX-style configuration files
4. **HttpRequest**: Parses HTTP request line, headers, and body
5. **HttpResponse**: Generates HTTP response headers and status codes
6. **CgiHandler**: Executes CGI scripts and captures output

### Key Technologies

- **epoll**: Linux's scalable I/O event notification mechanism
- **Non-blocking sockets**: All socket operations are non-blocking
- **Edge-triggered mode**: Efficient event notification (EPOLLET)
- **CGI 1.1**: Common Gateway Interface for script execution
- **HTTP/1.1**: Persistent connections, chunked transfer

---

## 📚 Resources

### Networking
- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)
- [IBM - Nonblocking I/O and select()](https://www.ibm.com/support/knowledgecenter/ssw_ibm_i_72/rzab6/xnonblock.htm)

### HTTP
- [MDN - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [RFC 9112 - HTTP/1.1](https://www.rfc-editor.org/info/rfc9112)

### CGI
- [RFC 3875 - CGI](https://datatracker.ietf.org/doc/html/rfc3875)
- [Python CGI Programming](https://www.tutorialspoint.com/python/python_cgi_programming.htm)

---

## 🎯 Learning Outcomes

This project taught me:

- **Low-level networking**: Socket programming, TCP/IP fundamentals
- **I/O multiplexing**: Understanding epoll and non-blocking I/O
- **HTTP protocol**: Deep dive into request/response cycle
- **CGI specification**: Process execution and environment variables
- **C++98 standard**: Working within language constraints
- **Server architecture**: Event loops and connection pooling
- **Configuration parsing**: Building robust tokenizers and validators

---

## 👨‍💻 Authors

**ValGS** - [@ValGSgit](https://github.com/ValGSgit)  
**Ka Hou** - [@fankahou](https://github.com/fankahou)

---

*Developed as part of 42 School Common Core curriculum*

**Made with ❤️ and lots of ☕**
