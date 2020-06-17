import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import { ToastProvider } from 'react-toast-notifications';

import './Dashboard.scss';

import TopNav from '../../components/Navigation/TopNav';

import PublishRoom from '../../components/Publisher/PublishRoom';
// import createBooking from '../../components/Publisher/CreateBook';

import Home from '../Home/Home';
import Users from '../../components/Users/Users';
import User from '../../components/Users/User';
import Rooms from '../../components/Rooms/Rooms';
import Room from '../../components/Rooms/Room';
import Bookings from '../../components/Bookings/Bookings';

function Dasboard() {
	// if (!currentState.Auth.isAuthenticated) {
	// 	return <Redirect to='/auth/signin' />;
	// }
	return (
		<React.Fragment>
			<TopNav />
			<div className='dashboard'>
				<main className='main'>
					<Switch>
						<Route exact path='/home'>
							<Home />
						</Route>
						<Route exact path='/publish'>
							<ToastProvider>
								<PublishRoom />
							</ToastProvider>
						</Route>
						<Route exact path='/rooms'>
							<Rooms />
						</Route>
						<Route exact path='/rooms/:param'>
							<Room />
						</Route>
						<Route exact path='/bookings'>
							<Bookings />
						</Route>
						<Route exact path='/users'>
							<Users />
						</Route>
						<Route exact path='/users/:param'>
							<User />
						</Route>
					</Switch>
				</main>
			</div>
		</React.Fragment>
	);
}

export default Dasboard;
