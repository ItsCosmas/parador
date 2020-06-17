import React from 'react';

// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { LogIn } from '../../redux/reducers/auth/authActions';

import './SignIn.scss';

const SignIn = () => {
	// const currentState = useSelector((state) => state.Auth);

	// const [user, setUser] = useState({
	// 	username: '',
	// 	password: '',
	// });
	// const dispatch = useDispatch();

	// const userSignIn = (credentials) => dispatch(SignIn(credentials));

	// const handleChange = (e) => {
	// 	setUser({
	// 		...user,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };
	// const submitUser = (e) => {
	// 	e.preventDefault();
	// 	userSignIn({
	// 		username: user.username,
	// 		password: user.password,
	// 	});
	// };

	// if (currentState.isAuthenticated) {
	// 	return <Redirect to='/home' />;
	// }

	return (
		<React.Fragment>
			<div className='signin'>
				<h1 className='u-margin-bottom-small signin--emoji'>
					{' '}
					<span role='img' aria-label='waving hand'>
						👋🏾
					</span>
				</h1>
				<h1 className='heading--primary text__content--black u-margin-bottom-small'>
					Welcome Back!
				</h1>
				<p className='text__content text__content--grey'>
					Sign In into your account
				</p>
				<form className='signin__form u-margin-top-small'>
					<div className={'signin__form--group'}>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							placeholder='Your Username'
							name='username'
						/>
					</div>
					<div className={'signin__form--group'}>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							placeholder='Password'
							name='password'
						/>
					</div>
					{/* {currentState.isLoading ? (
						<div className={'signin__form--group'}>
							<button
								className={
									'btn btn--cta u-margin-top-medium u-link-hover'
								}
								type='submit'
								block='true'
								disabled>
								Logging In ...
							</button>
						</div>
					) : ( */}
					<div className={'signin__form--group'}>
						<button
							className={
								'btn btn--cta u-margin-top-medium u-link-hover'
							}
							type='submit'
							block='true'>
							Sign In
						</button>
					</div>
					{/* // )} */}
				</form>
				<Link
					to='/auth/reset'
					className={'navigation__list--link text--link'}>
					Forgot Password ?
				</Link>
				<span className='u-margin-top-medium'>
					Don't have an account?{' '}
					<Link
						to='/auth/register'
						className={'navigation__list--link text--link'}>
						Register
					</Link>
				</span>
			</div>
		</React.Fragment>
	);
};

export default SignIn;
