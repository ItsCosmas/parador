const express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');
//cors = require('cors');

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// var corsOptions = {
// 	origin: 'http://localhost:8081',
// };
// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Parador Backend Server.' });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log(`Server is listening on ${PORT}`);
});
