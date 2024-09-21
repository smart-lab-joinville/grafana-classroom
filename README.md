# Grafana Classroom

> A Grafana Containers on-demand provision system which instruments Docker to do so.

## Introduction

To build and deploy Grafana Containers based on classes' demands this aplication exposes a Vuejs app, which communicates with a Expressjs API. Under the hood, the API interacts with another API responsible for interacting with the Docker Engine, being called the Docker Socket Interface (`docker-intf`).

The idea dehind this architecture is to instrument Docker and provide the containers, while also isolating the Daemon from the external world securely. This approach makes use of some Docker technologies, such as:

- Networking: The `docker-intf` only shares a Docker network with the aplication server. Is also doesn't exposes any port to the host;
- Volumes: The acess to the Daemon is made through the mounting of the socket to inside the `docker-intf` container. It means that the Daemon keeps being not accessible in the network;
- HTTP Routing: Just specific endpoints are implemented, so the interface client can not have full Daemon controll even with total `docker-intf` access.
