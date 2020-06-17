import {
	SIGNUP_SUCCESS,
	SIGNUP_ERROR,
	SIGNIN_SUCCESS,
	SIGNIN_ERROR,
	SIGNOUT_SUCCESS,
	BEFORE_STATE,
	BEFORE_USER_STATE,
	DELETE_USER_SUCCESS,
	DELETE_USER_ERROR,
} from './authTypes';

import isEmpty from 'lodash/isEmpty';

export const initState = {
	isAuthenticated: false,
	currentUser: {},
	isLoading: false,
	isLoadingAvatar: false,
	isUpdatingUser: false,
	isAdmin: false,
	authError: null,
	authSuccess: null,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		// This is the state to set when the button is click and we are waiting for response
		case BEFORE_STATE:
			return {
				...state,
				authError: null,
				isLoading: true,
			};
		case BEFORE_USER_STATE:
			return {
				...state,
				userError: null,
				isUpdatingUser: true,
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				isLoading: false,
				signupError: null,
				loginError: null,
			};
		case SIGNUP_ERROR:
			return {
				...state,
				isLoading: false,
				signupError: action.payload,
				loginError: null,
			};
		case SIGNIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				currentUser: action.payload,
				isAuthenticated: !isEmpty(action.payload),
				loginError: null,
				signupError: null,
			};
		case SIGNIN_ERROR:
			return {
				...state,
				authError: true,
				isLoading: false,
				loginError: action.payload,
				signupError: null,
			};
		case SIGNOUT_SUCCESS:
			return {
				...state,
				isAuthenticated: false,
				currentUser: {},
				logoutError: null,
				isLoading: false,
				signupError: null,
				loginError: null,
			};

		case DELETE_USER_SUCCESS:
			return {
				...state,
				isAuthenticated: false,
				currentUser: {},
				isLoading: false,
				authSuccessUser: 'User Deleted',
			};
		case DELETE_USER_ERROR:
			return {
				...state,
				isLoading: false,
				userError: action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
