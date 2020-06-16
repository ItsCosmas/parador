const { v1: uuidv1 } = require('uuid');

function generateUuid() {
	return uuidv1();
}

module.exports = generateUuid;
