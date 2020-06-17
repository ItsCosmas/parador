import API_ROUTE from '../../../apiRoute';
import axios from 'axios';
import {
	BEFORE_STATE_ROOM,
	FETCH_ROOMS,
	FETCH_ROOMS_ERROR,
	GET_ROOM_SUCCESS,
	GET_ROOM_ERROR,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_ERROR,
	UPDATE_ROOM_SUCCESS,
	UPDATE_ROOM_ERROR,
	DELETE_ROOM_SUCCESS,
	DELETE_ROOM_ERROR,
	FETCH_AUTH_ROOMS,
	FETCH_AUTH_ROOMS_ERROR,
} from './roomTypes';
import { history } from '../../../history';

export const fetchRooms = () => {
	return async (dispatch) => {
		dispatch({ type: BEFORE_STATE_ROOM });

		try {
			const res = await axios.get(`${API_ROUTE}/rooms`);
			dispatch({ type: FETCH_ROOMS, payload: res.data.body });
		} catch (err) {
			dispatch({
				type: FETCH_ROOMS_ERROR,
				payload: err.response ? err.respons.data.error : '',
			});
		}
	};
};

// We will not fetching a single room anywhere
export const fetchRoom = (id) => {
	return async (dispatch) => {
		dispatch({ type: BEFORE_STATE_ROOM });

		try {
			const res = await axios.get(`${API_ROUTE}/rooms/${id}`);
			dispatch({ type: GET_ROOM_SUCCESS, payload: res.data.body });
		} catch (err) {
			dispatch({
				type: GET_ROOM_ERROR,
				payload: err.response.data.error,
			});
			history.push('/'); //incase the user manually enter the param that dont exist
		}
	};
};

export const createRoom = (roomData) => {
	return async (dispatch) => {
		dispatch({ type: BEFORE_STATE_ROOM });

		try {
			const res = await axios.post(`${API_ROUTE}/rooms`, roomData);
			dispatch({
				type: CREATE_ROOM_SUCCESS,
				payload: res.data.body,
			});
		} catch (err) {
			dispatch({
				type: CREATE_ROOM_ERROR,
				payload: err.response.data.error,
			});
		}
	};
};

// export const updatePost = (updateDetails, updateSuccess) => {
// 	return async (dispatch) => {
// 		dispatch({ type: BEFORE_STATE_POST });

// 		try {
// 			const res = await axios.put(
// 				`${API_ROUTE}/posts/${updateDetails.id}`,
// 				updateDetails
// 			);
// 			dispatch({
// 				type: UPDATE_POST_SUCCESS,
// 				payload: res.data.response
// 			});
// 			updateSuccess();
// 		} catch (err) {
// 			dispatch({
// 				type: UPDATE_POST_ERROR,
// 				payload: err.response.data.error
// 			});
// 		}
// 	};
// };

// export const deletePost = (id) => {
// 	return async (dispatch) => {
// 		dispatch({ type: BEFORE_STATE_POST });

// 		try {
// 			const res = await axios.delete(`${API_ROUTE}/posts/${id}`);
// 			dispatch({
// 				type: DELETE_POST_SUCCESS,
// 				payload: {
// 					deletedID: id,
// 					message: res.data.response
// 				}
// 			});
// 			history.push('/');
// 		} catch (err) {
// 			dispatch({
// 				type: DELETE_POST_ERROR,
// 				payload: err.response.data.error
// 			});
// 		}
// 	};
// };
