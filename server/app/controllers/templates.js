/*
********************************
		User Template 
********************************
*/
exports.userOutputTemplate = (user) => {
	return {
		id: user.externalId,
		fullName: user.fullName,
		email: user.email,
		phone: user.phone,
		role: user.role,
		dateJoined: user.dateJoined,
	};
};

exports.usersOutputTemplate = (users) => {
	let users_arr = [];

	for (i = 0; i < users.length; i++) {
		users_arr.push(this.userOutputTemplate(users[i]));
	}
	return users_arr;
};

/*
********************************
		Rooms Template 
********************************
*/

exports.roomTypeOutputTemplate = (roomType) => {
	return {
		id: roomType.externalId,
		name: roomType.name,
		description: roomType.description,
		price: roomType.price,
		category: roomType.category,
		roomCount: roomType.roomCount,
		headerPhoto: roomType.headerPhoto,
		photos: roomType.photos,
	};
};

exports.roomTypesOutputTemplate = (roomTypes) => {
	let roomTypes_arr = [];

	for (i = 0; i < roomTypes.length; i++) {
		roomTypes_arr.push(this.roomTypeOutputTemplate(roomTypes[i]));
	}
	return roomTypes_arr;
};

/*
********************************
		Bookings Template 
********************************
*/

exports.bookingOutputTemplate = (booking) => {
	return {
		id: booking.externalId,
		roomTypeId: booking.roomTypeId,
		price: booking.price,
		checkInDate: booking.checkInDate,
		checkOutDate: booking.checkOutDate,
	};
};

exports.bookingsOutputTemplate = (bookings) => {
	let bookings_arr = [];

	for (i = 0; i < bookings.length; i++) {
		bookings_arr.push(this.bookingOutputTemplate(bookings[i]));
	}
	return bookings_arr;
};
