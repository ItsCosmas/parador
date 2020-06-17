import API_ROUTE from '../../../apiRoute';
import axios from 'axios';
import setAuthorizationToken from '../../../authorization/authorization';
import {
	BEFORE_STATE,
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	SIGNIN_SUCCESS,
	SIGNIN_ERROR,
	SIGNOUT_SUCCESS,
	DELETE_USER_SUCCESS,
	DELETE_USER_ERROR,
} from './authTypes';
import { history } from '../../../history';

export const LogIn = (credentials) => {
	return async (dispatch) => {
		dispatch({ type: BEFORE_STATE });
		try {
			const res = await axios.post(
				`${API_ROUTE}/users/login`,
				credentials
			);
			let userData = res.data.body;

			localStorage.setItem('token', userData.token);
			localStorage.setItem('user_data', JSON.stringify(userData));
			setAuthorizationToken(userData.token);
			dispatch({ type: SIGNIN_SUCCESS, payload: userData });
		} catch (err) {
			dispatch({ type: SIGNIN_ERROR, payload: err.response.data.error });
		}
	};
};

export const LogOut = () => {
	return (dispatch) => {
		localStorage.removeItem('token');
		setAuthorizationToken(false);
		dispatch({ type: SIGNOUT_SUCCESS });
		window.localStorage.clear(); //update the localstorage
		history.push('/signin');
	};
};

export const SignUp = (newUser) => {
	return async (dispatch) => {
		dispatch({ type: BEFORE_STATE });
		try {
			await axios.post(`${API_ROUTE}/users`, newUser);
			dispatch({ type: SIGNUP_SUCCESS });
			history.push('/login');
		} catch (err) {
			dispatch({ type: SIGNUP_ERROR, payload: err.response.data.error });
		}
	};
};

// export const updateUserAvatar = (updateUserAvatar) => {
// 	return async (dispatch, getState) => {
// 		dispatch({ type: BEFORE_AVATAR_STATE });
// 		const { id } = getState().Auth.currentUser;
// 		try {
// 			const res = await axios.put(
// 				`${API_ROUTE}/avatar/users/${id}`,
// 				updateUserAvatar,
// 				{
// 					headers: {
// 						'Content-Type': 'multipart/form-data',
// 					},
// 				}
// 			);
// 			let updatedUser = res.data.response;
// 			window.localStorage.setItem(
// 				'user_data',
// 				JSON.stringify(updatedUser)
// 			); //update the localstorage
// 			dispatch({ type: UPDATE_USER_AVATAR, payload: updatedUser });
// 		} catch (err) {
// 			dispatch({
// 				type: UPDATE_USER_AVATAR_ERROR,
// 				payload: err.response.data.error,
// 			});
// 		}
// 	};
// };

// export const updateUser = (updateUser, clearInput) => {
// 	return async (dispatch, getState) => {
// 		dispatch({ type: BEFORE_USER_STATE });
// 		const { currentUser } = getState().Auth;
// 		try {
// 			const res = await axios.put(
// 				`${API_ROUTE}/users/${currentUser.id}`,
// 				updateUser
// 			);
// 			let updatedUser = res.data.response;

// 			dispatch({ type: UPDATE_USER_SUCCESS, payload: updatedUser });
// 			window.localStorage.setItem(
// 				'user_data',
// 				JSON.stringify(updatedUser)
// 			); //update the localstorages
// 			clearInput();
// 		} catch (err) {
// 			dispatch({
// 				type: UPDATE_USER_ERROR,
// 				payload: err.response.data.error,
// 			});
// 		}
// 	};
// };

export const deleteUser = (id) => {
	return async (dispatch) => {
		dispatch({ type: BEFORE_STATE });
		try {
			const res = await axios.delete(`${API_ROUTE}/users/${id}`);
			let deleteMessage = res.data.response;
			dispatch({ type: DELETE_USER_SUCCESS, payload: deleteMessage });
			window.localStorage.clear(); //update the localstorage
			window.location.href = '/';
		} catch (err) {
			dispatch({
				type: DELETE_USER_ERROR,
				payload: err.response.data.error,
			});
		}
	};
};

// export const ForgotPassword = (userEmail, clearInput) => {
// 	return async (dispatch) => {
// 		dispatch({ type: BEFORE_STATE });

// 		try {
// 			const res = await axios.post(
// 				`${API_ROUTE}/password/forgot`,
// 				userEmail
// 			);
// 			let passwordRequest = res.data.response;
// 			dispatch({
// 				type: FORGOT_PASSWORD_SUCCESS,
// 				payload: passwordRequest,
// 			});
// 			clearInput();
// 		} catch (err) {
// 			dispatch({
// 				type: FORGOT_PASSWORD_ERROR,
// 				payload: err.response.data.error,
// 			});
// 		}
// 	};
// };

// export const ResetPassword = (details, clearInput) => {
// 	return async (dispatch) => {
// 		dispatch({ type: BEFORE_STATE });

// 		try {
// 			const res = await axios.post(
// 				`${API_ROUTE}/password/reset`,
// 				details
// 			);
// 			let passwordRequest = res.data.response;
// 			dispatch({
// 				type: RESET_PASSWORD_SUCCESS,
// 				payload: passwordRequest,
// 			});
// 			clearInput();
// 		} catch (err) {
// 			dispatch({
// 				type: RESET_PASSWORD_ERROR,
// 				payload: err.response.data.error,
// 			});
// 		}
// 	};
// };
