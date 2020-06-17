import React from 'react';

import TopNav from '../components/Navigation/TopNav';
import SignIn from '../components/Auth/SignIn';
import Dashboard from './Dashboard/Dashboard';

function App() {
	return (
		<React.Fragment>
			<TopNav />
			<SignIn />
			<Dashboard />
			<div>The App goes here</div>
		</React.Fragment>
	);
}

export default App;
