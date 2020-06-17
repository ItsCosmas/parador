import React from 'react';

import { Link, Redirect, Switch, Route } from 'react-router-dom';

import './Auth.scss';
import authIllustration from '../../assets/illustrations/auth-illustration.svg';
import logo from '../../assets/img/logo.svg';

import SignIn from './SignIn';
import Register from './Register';
import Error404 from '../Errors/Error404';

const Auth = () => {
	return (
		<React.Fragment>
			<div className='auth'>
				<div className='auth__visual'>
					<h1 className='heading--main u-margin-bottom-small'>
						<Link to='/' className={'text--link'}>
							<div className='topnav__logo'>
								<img
									src={logo}
									alt=''
									className='topnav__logo--img'
								/>
							</div>
						</Link>
					</h1>
					<figure className='auth__visual--figure u-margin-bottom-small'>
						<img
							src={authIllustration}
							alt='Illustration'
							className='auth__visual--illustration'
						/>
					</figure>
					<h1 className='heading--primary u-margin-bottom-small text--white'>
						Parador is the leading hotel destination in Africa
					</h1>
					<p className='text__content text--white'>
						We are commited to serving our customers to fullest
						satistaction. Login or Create an account to place your
						reservation
					</p>
				</div>
				<div className='auth__content'>
					<Switch>
						{/* <Route path='/auth/'>
							<SignIn />
						</Route> */}
						<Route path='/auth/signin'>
							<SignIn />
						</Route>
						<Route path='/auth/register'>
							<Register />
						</Route>
						{/* Error 404 */}
						<Route exact path='/404' component={Error404} />
						<Redirect from='*' to='/404' />
					</Switch>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Auth;
