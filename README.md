# MKRN - Dockerized
Stack composed of MongoDB, KoaJS, React, NodeJS dockerized in 3 different containers. Hot reload for both frontend and backend. Development and production environments.

## Goal
The goal is to have a dockerized app that requires little configuration to be deployed on AWS, GCloud or similar services.

## Things to do

- Add NGINX container with SSL encryption to expose both backend and frontend.
- Comment and clean codebase.
- Write documentation.


## Installation

Docker-compose is required.

#### How to start development environment

```sh
docker-compose up --build
```
- Access client at: localhost:3000
- Access server at: localhost:8080
- Access mongo at: localhost:27017 (username: username, password: password)

#### How to start development environment

```sh
docker-compose -f docker-compose-prod.yml up --build
```
- Access client at: localhost:3000
- Access server at: localhost:8080
- Access mongo at: localhost:27017 (username: username, password: password)
