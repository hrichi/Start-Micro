# Start Micro

Start Micro is a simple Microservice Architecture oriented project.

## Overview

The project is composed of 5 micro-services:

1. weather_service
An express.js service that use the openweathermap to get forecast for given city.

2. weather_prediction_service
An ASP.NET Core 3.1 project that use ML.NET to predict the weather from an image. 
The used model is pre-trained using a simple data, so the accuracy isn't on the top.

3. grpc_services
A gRPC service using ASP.NET Core 3.1 and Grpc.AspNetCore.

4. angular_client
A simple angular application that have two pages one for the weather forecast from openweathermap and the second for the weather prediction.

5. envoy
Due to the current implementation of the gRPC-Web (Isn't fully compatible  with the gRPC specially the HTTP/2), we need to use a reverse proxy that translate calls from the client (HTTP/1.1) into HTTP/2 calls that can be recognized by the gRPC service.

See [here](https://grpc.io/blog/state-of-grpc-web) for more information about gRPC-Web & Envoy.

## Build & Run
---
**NOTE**

The proxy config file (last line of src\grpc-gateway\envoy\envoy.yaml) changes depending of the OS.  
Linux users : 
````
hosts: [{ socket_address: { address: localhost, port_value: 9090 }}]
````
Windows or Mac users : 
````
hosts: [{ socket_address: { address: host.docker.internal, port_value: 9090 }}]
````

---
Open a terminal on the repo root directory and run :
````
docker-compose build
````
![docker_compose_build](https://user-images.githubusercontent.com/4746509/73063139-5df03680-3e9e-11ea-9f69-39ce8e433413.gif)

````
docker-compose up
````
![docker_compose_up](https://user-images.githubusercontent.com/4746509/73063321-d35c0700-3e9e-11ea-8349-8eb9a6a4812e.gif)

Now if every thing goes well, all the micro-services are up and running.  
To test this, simply open new tab on your browser and go to:
````
http://localhost:8081
````
For Windows users :
````
http://host.docker.internal:8081
````
You should get this page :
![test_result](https://user-images.githubusercontent.com/4746509/73078696-00221580-3ec3-11ea-9d59-7c738973a936.gif)

## How to generate grpc client for angular
````
protoc -I='.' weather.proto --js_out=import_style=commonjs:../../Start-Micro-Web/src/app/Services --grpc-web_out=import_style=typescript,mode=grpcwebtext:../../Start-Micro-Web/src/app/Services
````