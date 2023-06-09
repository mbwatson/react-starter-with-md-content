# Pathways Website

This is a React application that serves as the main web presence for the Pathways program.

### 🚀 Getting Started

### 🚧 Application Development

Clone this repository, move into the project root, and install the dependencies with `npm i`. Start a local development server by running `npm start`.

### 🎁 Building for Production

To build a production-ready app, run `npm run build` from the project root directory. The bundled files will be exported to the `dist` directory.

To build an easily debuggable production build, use `npm run build-dev`.

#### Docker

A Dockerfile lives in this repo to get started with containerized deployment.

The command to build an NGINX image that serves your application might look something like `docker build -t pathways-website .`.

To spin up a container from your image, use a command such as `docker run --rm -p 80:8080 pathways-website`.
