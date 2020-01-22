# Start Micro

Start Micro is a simple Microservice Architecture oriented project.

## Overview

<!-- ToDo: Complete readme -->

## How to generate grpc client for angular
````
protoc -I='.' weather.proto --js_out=import_style=commonjs:../../Start-Micro-Web/src/app/Services --grpc-web_out=import_style=typescript,mode=grpcwebtext:../../Start-Micro-Web/src/app/Services
````