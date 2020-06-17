import {
	BEFORE_STATE_BOOKING,
	FETCH_BOOKINGS,
	FETCH_BOOKINGS_ERROR,
	CREATE_BOOKING_SUCCESS,
	UPDATE_BOOKING_SUCCESS,
	CREATE_BOOKING_ERROR,
	UPDATE_BOOKING_ERROR,
	GET_BOOKING_SUCCESS,
	GET_BOOKING_ERROR,
	DELETE_BOOKING_SUCCESS,
	DELETE_BOOKING_ERROR,
	FETCH_AUTH_BOOKINGS,
	FETCH_AUTH_BOOKINGS_ERROR,
} from './bookingTypes';

export const initState = {
	bookings: [],
	authbookings: [],
	booking: {},
	bookingsError: null,
	isLoading: false,
};

const bookingReducer = (state = initState, action) => {
	const { payload, type } = action;
	switch (type) {
		case BEFORE_STATE_BOOKING:
			return {
				...state,
				bookingsError: null,
				isLoading: true,
			};
		case FETCH_BOOKINGS:
			return {
				...state,
				bookings: payload,
				isLoading: false,
			};

		case FETCH_BOOKINGS_ERROR:
			return {
				...state,
				bookingsError: payload,
				isLoading: false,
			};

		// case FETCH_AUTH_BOOKINGS:
		// 	return {
		// 		...state,
		// 		authbookings: payload,
		// 		isLoading: false,
		// 	};

		// case FETCH_AUTH_BOOKINGS_ERROR:
		// 	return {
		// 		...state,
		// 		bookingsError: payload,
		// 		isLoading: false,
		// 	};

		case GET_BOOKING_SUCCESS:
			return {
				...state,
				booking: payload,
				bookingsError: null,
				isLoading: false,
			};

		case GET_BOOKING_ERROR:
			return {
				...state,
				bookingsError: payload,
				isLoading: false,
			};

		case CREATE_BOOKING_SUCCESS:
			return {
				...state,
				bookings: [payload, ...state.bookings],
				bookingsError: null,
				isLoading: false,
			};

		case CREATE_BOOKING_ERROR:
			return {
				...state,
				bookingsError: payload,
				isLoading: false,
			};

		case UPDATE_BOOKING_SUCCESS:
			return {
				...state,
				bookings: state.bookings.map((booking) =>
					booking.id === payload.id
						? {
								...booking,
								title: payload.title,
								content: payload.content,
						  }
						: booking
				),
				authBookings: state.authBookings.map((booking) =>
					booking.id === payload.id
						? {
								...booking,
								title: payload.title,
								content: payload.content,
						  }
						: booking
				),
				booking: payload,
				bookingsError: null,
				isLoading: false,
			};

		case UPDATE_BOOKING_ERROR:
			return {
				...state,
				bookingsError: payload,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default bookingReducer;
