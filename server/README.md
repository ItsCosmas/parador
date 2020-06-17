# Hotel Management Backend

### API DOCS

-   https://documenter.getpostman.com/view/6675816/Szzj9JGj

##### Start MongoDB

-   `sudo service mongod start`

##### RUN Backend App

-   `cd /server`
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

-   Finally Run The app as follows
-   `npm i` - Install Dependencies
-   `npm run dev` - Start development Server
-   `npm run start` - Run In Production

# Known Issues

-   No test Coverage
