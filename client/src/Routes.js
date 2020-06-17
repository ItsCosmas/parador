import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Error404 from './components/Errors/Error404';

import App from './containers/App';
import Dashboard from './containers/Dashboard/Dashboard';
import { history } from './history';

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={App} />

				{/* <Route path='/signin' component={Auth} /> */}
				{/* <Route path='/register' component={Auth} /> */}

				{/* <Route exact path='/auth' component={Auth} /> */}
				<Route exact path='/auth/:path' component={Auth} />

				{/* Route Definitions to Dashboard */}
				<Route exact path='/home' component={Dashboard} />
				<Route exact path='/' component={Dashboard} />
				<Route path='/publish' component={Dashboard} />
				<Route path='/bookings' component={Dashboard} />
				<Route path='/users' component={Dashboard} />

				{/* Error 404 */}
				<Route exact path='/404' component={Error404} />
				<Redirect from='*' to='/404' />
			</Switch>
		</Router>
	);
};

export default Routes;
