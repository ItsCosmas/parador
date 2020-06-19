# Parador

## WORK IN PROGRESS !!!!!!!!!!

### Hotel Management Platform

-   Backend README available at `server` directory.
-   API Docs: https://documenter.getpostman.com/view/6675816/Szzj9JGj
-   Frontend README available at `client` directory.

*   Fastest Way to run this project:

#### With Docker:

-   `cd server`
-   Create `.env` file:
-   `touch .env`
-   Sample Env

-   ```
    # on docker
    MONGODB_URI=mongodb://mongo/parador
    # if not on docker
    #MONGODB_URI=mongodb://localhost:27017/parador
    APP_jwtPrivateKey=my-very-secret-key
    APP_PORT=3000
    ```

-   `docker-compose up -t` - without logs
-   `docker-compose up` - with logs

*   \*Possible improvement on time it takes to build the client container first time.

-   Backend: http://0.0.0.0:3000
-   Frontend: http://0.0.0.0:8080

-   Mongo Express DB client: http://0.0.0.0:8081 \*FOR DEV PURPOSE ONLY

#### Alternatively without Docker:

-   Install `Node 10.21.0` and Mongo `v4.0.19`

-   `cd server`
-   Create `.env` file:
-   `touch .env`
-   Sample Env

-   ```
    # on docker
    #MONGODB_URI=mongodb://mongo/parador
    # if not on docker
    MONGODB_URI=mongodb://localhost:27017/parador
    APP_jwtPrivateKey=my-very-secret-key
    APP_PORT=3000
    ```

-   Run Backend and Frontend Production Readily:
-   NOTE: Use a PROCESS MANAGER FOR NODE.JS like pm2 if going on Prod:

-   `sudo service mongod start`
-   `npm i serve -g`
-   `chmod +x run.sh && ./run.sh`

-   Frontend: http://0.0.0.0:8080
-   Backend: http://0.0.0.0:3000

-   This simple project demonstrates the following:

### Backend

-   Allows users to browse certain resources without auth
-   Register Users
-   Login Users
-   Authorization and Security: Using JWT Web Tokens
-   Role Based Authorization(Admin and Standard Users) with access to different routes and views
-   CRUD operations
-   API design
-   A standalone REST backend
-   Express Framework

### Frontend

-   React
-   Redux
-   State Management
-   React Hooks
-   Styling(Sass)
-   Basics of UX design
-   Standalone frontend consuming a rest backend

### Dockerizing the Backend
