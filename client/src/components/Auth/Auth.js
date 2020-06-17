import React from 'react';

import { Link, Redirect, Switch, Route } from 'react-router-dom';

import './Auth.scss';
// import authIllustration from '../../assets/illustrations/auth-illustration.svg';

import SignIn from './SignIn';
import Register from './Register';

const Auth = () => {
	return (
		<React.Fragment>
			<div className='auth'>
				<div className='auth__visual'>
					<h1 className='heading--main u-margin-bottom-small'>
						<Link to='/' className={'navigation__list--link'}>
							<span className='navigation__logo--text text--white'>
								Wajibika
							</span>
						</Link>
					</h1>
					{/* <figure className='auth__visual--figure u-margin-bottom-small'>
						<img
							src={authIllustration}
							alt='Illustration'
							className='auth__visual--illustration'
						/>
					</figure> */}
					<h1 className='heading--primary u-margin-bottom-small text--white'>
						Your One Stop Public Reporting tool
					</h1>
					<p className='text__content text--white'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsa quae consequatur voluptatem nostrum assumenda earum
						fugit consectetur atque sunt ut dicta alias impedit.
					</p>
				</div>
				<div className='auth__content'>
					<Switch>
						<Route exact path='/signin'>
							<SignIn />
						</Route>
						<Route exact path='/register'>
							<Register />
						</Route>
					</Switch>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Auth;
