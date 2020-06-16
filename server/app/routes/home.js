const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json({ message: 'Welcome to Parador Backend Server.' });
});

module.exports = router;
