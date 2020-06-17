import API_ROUTE from '../../../apiRoute';
import axios from 'axios';
import {
	BEFORE_STATE_BOOKING,
	FETCH_BOOKINGS,
	FETCH_BOOKINGS_ERROR,
	GET_BOOKING_SUCCESS,
	GET_BOOKING_ERROR,
	CREATE_BOOKING_SUCCESS,
	CREATE_BOOKING_ERROR,
	UPDATE_BOOKING_SUCCESS,
	UPDATE_BOOKING_ERROR,
	DELETE_BOOKING_SUCCESS,
	DELETE_BOOKING_ERROR,
	FETCH_AUTH_BOOKINGS,
	FETCH_AUTH_BOOKINGS_ERROR,
} from './bookingTypes';
import { history } from '../../../history';

export const fetchBookings = () => {
	return async (dispatch) => {
		dispatch({ type: BEFORE_STATE_BOOKING });

		try {
			const res = await axios.get(`${API_ROUTE}/bookings`);
			dispatch({ type: FETCH_BOOKINGS, payload: res.data.body });
		} catch (err) {
			dispatch({
				type: FETCH_BOOKINGS_ERROR,
				payload: err.response ? err.respons.data.error : '',
			});
		}
	};
};

// We will not fetching a single Booking anywhere
export const fetchBooking = (id) => {
	return async (dispatch) => {
		dispatch({ type: BEFORE_STATE_BOOKING });

		try {
			const res = await axios.get(`${API_ROUTE}/bookings/${id}`);
			dispatch({ type: GET_BOOKING_SUCCESS, payload: res.data.body });
		} catch (err) {
			dispatch({
				type: GET_BOOKING_ERROR,
				payload: err.response.data.error,
			});
			history.push('/'); //incase the user manually enter the param that dont exist
		}
	};
};

export const createBooking = (roomData) => {
	return async (dispatch) => {
		dispatch({ type: BEFORE_STATE_BOOKING });

		try {
			const res = await axios.post(`${API_ROUTE}/booking`, roomData);
			dispatch({
				type: CREATE_BOOKING_SUCCESS,
				payload: res.data.body,
			});
		} catch (err) {
			dispatch({
				type: CREATE_BOOKING_ERROR,
				payload: err.response.data.error,
			});
		}
	};
};

// export const updateBooking = (updateDetails, updateSuccess) => {
// 	return async (dispatch) => {
// 		dispatch({ type: BEFORE_STATE_BOOKING });

// 		try {
// 			const res = await axios.put(
// 				`${API_ROUTE}/bookings/${updateDetails.id}`,
// 				updateDetails
// 			);
// 			dispatch({
// 				type: UPDATE_BOOKING_SUCCESS,
// 				payload: res.data.response
// 			});
// 			updateSuccess();
// 		} catch (err) {
// 			dispatch({
// 				type: UPDATE_BOOKING_ERROR,
// 				payload: err.response.data.error
// 			});
// 		}
// 	};
// };

// export const deleteBooking = (id) => {
// 	return async (dispatch) => {
// 		dispatch({ type: BEFORE_STATE_BOOKING });

// 		try {
// 			const res = await axios.delete(`${API_ROUTE}/bookings/${id}`);
// 			dispatch({
// 				type: DELETE_BOOKING_SUCCESS,
// 				payload: {
// 					deletedID: id,
// 					message: res.data.response
// 				}
// 			});
// 			history.push('/');
// 		} catch (err) {
// 			dispatch({
// 				type: DELETE_BOOKING_ERROR,
// 				payload: err.response.data.error
// 			});
// 		}
// 	};
// };
