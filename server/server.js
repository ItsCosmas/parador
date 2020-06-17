const express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	cors = require('cors');

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

const home = require('./app/routes/home');
const users = require('./app/routes/users');
const rooms = require('./app/routes/rooms');
const bookings = require('./app/routes/bookings');
// Allow CORS
var corsOptions = {
	origin: 'http://localhost:8080',
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

/************************* 
		Set Up DB 
***********************/
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: true,
});
mongoose.set('debug', true);
console.log('************************');
console.log('DB CONNECTED');
console.log('************************');
/*******************************
		Initialize Routes
*******************************/
app.use('/', home);
app.use('/users', users);
app.use('/rooms', rooms);
app.use('/bookings', bookings);

// set port, listen for requests
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, function () {
	console.log(`Server is listening on ${PORT}`);
});
