# Grab Official Node Image
FROM node:10.21.0-alpine3.9

# set work directory
WORKDIR /opt/app/server

# Copy the dependecies and install
COPY ./package.json /opt/app/server/
RUN npm install

# Copy the source code
COPY . /opt/app/server/

# Run the image as a non-root user
# RUN adduser myuser
# USER myuser

# Run the app
CMD node server.js