import React from 'react';

import TopNav from '../components/Navigation/TopNav';
import SignIn from '../components/Auth/SignIn';
import Dashboard from './Dashboard/Dashboard';
import Rooms from '../components/Rooms/Rooms';

function App() {
	return (
		<React.Fragment>
			<TopNav />
			{/* <SignIn /> */}
			{/* <Dashboard /> */}
			<Rooms />
			<div>The App goes here</div>
		</React.Fragment>
	);
}

export default App;
