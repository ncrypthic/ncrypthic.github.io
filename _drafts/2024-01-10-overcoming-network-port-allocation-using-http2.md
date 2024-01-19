---
layout: post
title: Overcoming Network Port Allocation using HTTP/2 Streaming
tags: [performance-test, http, http2, monitoring, grafana]
---

Nowadays, HTTP became a ubiquitous protocol for software systems to communicate or exchanging messages.
HTTP had evolve multiple times since it creation back in the late 80's. The latest improved version as
of this writing is [HTTP/3](https://datatracker.ietf.org/doc/html/rfc9114). Each improvements was created
to address prior implementation.

HTTP major strength is it simplicity. HTTP started out as simple stateless, text-based, synchronous
request-response model with minimalist syntax protocol on top of application layer in the [OSI Model](https://en.wikipedia.org/wiki/OSI_model).

### The networking part of HTTP over TCP/IP

Being on the application layer, HTTP does not aware of it's lower layer and rely on the operating system
to establish physical network connection. When using TCP/IP as the transport, it means a proper TCP/IP
socket connection must be established between the client & server to use HTTP communication protocol.

In the TCP/IP protocol, a network socket is a pair of IP address and a network port. So, socket connection
between two party in TCP/IP means an connection between pair of client-ip:port with server-ip:port. In HTTP
communication, the server usually have a fixed ip addresses and usually, but not necessarily, listening on well-known
port numbers (80, 443).

The maximum network port that an IP address can have is limited to 64511 (65535 - 1024[1]) ports. These available ports
are also shared with all running processes within the operating system.

I also recently learn that when tcp socket closes there should be waiting time [TIME-WAIT](https://datatracker.ietf.org/doc/html/rfc9293#section-3.6) period
before a socket can be re-use. On some operating system, the default time-wait is 60 and usually configurable.

#### HTTP and network capacity

With the rise of the internet, network connections utilization also improved. HTTP protocol must be able to handle network
connection more efficient. HTTP/1.1 added support for [persistent](https://www.rfc-editor.org/rfc/rfc9112.html#section-9.3)
connection in HTTP/1.1 and even set it as default state for HTTP/1.1 with connection control support via HTTP [Connection](https://www.rfc-editor.org/rfc/rfc9110.html#name-connection) header.

As the internet keeps growing, HTTP/1.1 users are trying to reduce latencies to better serve their customers. Conccurent HTTP requests are becoming common way to save some latency. But this concurrent requests approach still suffers with the HTTP/1.1 protocol in-efficiency as describe in [HTTP/2 specification](https://www.rfc-editor.org/rfc/rfc9113.html#section-1). So HTTP/2 was designed to make HTTP protocol itself more network friendly while making the data transfer more efficient.

#### Performance test experiment

**Objective**

- Improve throughput under specified constraints.

**Constraints**

- Total request count: 10000

**Controlled Variable**
- Server psudeo-random response time `50-250ms`
- Request count set to: 6000

**HTTP client**

Technology: Kotlin + Java17 + Springboot

**HTTP server**

Technology: Nodejs + Express

**HTTP/1.1**

| Max Conn | Throughput | Test Duration |
| 2        | ~13 rps    |
| 5        | ~33 rps    |
| 10       | ~65 rps    |
| 25       | ~163 rps   |
| 50       | ~195 rps   |

**HTTP/2**

| Max conn | Throughput | Test Duration |
| 2        |          |
| 5  |          |
| 10 |          |
| 25 |          |
| 50 |          |

#### Key takeaways
