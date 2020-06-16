#! /bin/sh

start_backend () {
    cd server
    npm run start
}

serve_frontend () {
    cd client
    npm run build
    serve build
}

start_backend &
serve_frontend