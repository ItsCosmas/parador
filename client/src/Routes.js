import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';

import App from './containers/App';
import Dashboard from './containers/Dashboard/Dashboard';
import { history } from './history';

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={App} />

				<Route path='/signin' component={Auth} />
				<Route path='/register' component={Auth} />

				{/* Route Definitions to Dashboard */}
				<Route exact path='/home' component={Dashboard} />
				<Route exact path='/' component={Dashboard} />
				<Route path='/publish' component={Dashboard} />
				<Route path='/bookings' component={Dashboard} />
				<Route path='/users' component={Dashboard} />
			</Switch>
		</Router>
	);
};

export default Routes;
