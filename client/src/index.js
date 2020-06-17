import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routes from './Routes';

import { Provider } from 'react-redux';
import store from './redux/store';
import setAuthorizationToken from './authorization/authorization';
import { SIGNIN_SUCCESS } from './redux/reducers/auth/authTypes';

//when the page reloads, the auth user is still set
if (localStorage.token) {
	setAuthorizationToken(localStorage.token);
	let userData =
		localStorage.getItem('user_data') == null
			? null
			: JSON.parse(localStorage.getItem('user_data'));
	store.dispatch({ type: SIGNIN_SUCCESS, payload: userData }); //provided he has a valid token
}

ReactDOM.render(
	<Provider store={store}>
		<Routes />
		{/* <App /> */}
	</Provider>,
	document.getElementById('root')
);
