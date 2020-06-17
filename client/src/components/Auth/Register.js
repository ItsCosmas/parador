import React, { useState } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
// import { SignUp } from '../../redux/reducers/auth/authActions';

import './Register.scss';

const Register = () => {
	// const currentState = useSelector((state) => state.Auth);

	const [state, setState] = useState({
		full_name: '',
		email: '',
		phone: '',
		company: '',
		location: '',
		password: '',
		confirm_password: '',
	});

	const [step, setStep] = useState(0);

	// const dispatch = useDispatch();

	// const userSignUp = (credentials) => dispatch(SignUp(credentials));

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleNextClick = (e) => {
		setStep(step + 1);
		console.log(step);
		console.log('Clicked next');
	};

	const handlePreviousClick = (e) => {
		setStep(step - 1);
		console.log(step);
		console.log('Clicked Previous');
	};

	// const submitUser = (e) => {
	// 	e.preventDefault();
	// 	userSignUp({
	// 		full_name: state.full_name,
	// 		username: state.username,
	// 		email: state.email,
	// 		company: state.company,
	// 		company_position: state.company_position,
	// 		password: state.password,
	// 	});
	// };

	const StepOne = (
		<React.Fragment>
			<div className={'register__form--group'}>
				<label htmlFor=''>Full Name</label>
				<input
					type='text'
					placeholder='Your full name'
					name='full_name'
					value={state.full_name}
					onChange={handleChange}
				/>
			</div>
			<div className={'register__form--group'}>
				<label htmlFor=''>Email</label>
				<input
					type='email'
					placeholder='Your email address'
					name='email'
					value={state.email}
					onChange={handleChange}
				/>
			</div>
			<div className={'register__form--group'}>
				<label htmlFor=''>Phone</label>
				<input
					type='text'
					placeholder='Your phone number'
					name='phone'
					value={state.phone}
					onChange={handleChange}
				/>
			</div>
			<div className={'register__form--group'}>
				<button
					className={'btn btn--cta u-margin-top-medium u-link-hover'}
					block='true'
					onClick={handleNextClick}>
					Next
				</button>
			</div>
		</React.Fragment>
	);

	const StepTwo = (
		<React.Fragment>
			<div className={'register__form--group'}>
				<label htmlFor=''>Location</label>
				<input
					type='text'
					placeholder='example Dubai, U.A.E'
					name='location'
					value={state.location}
					onChange={handleChange}
				/>
			</div>
			<div className={'register__form--group'}>
				<label htmlFor=''>Company *Optional</label>
				<input
					type='text'
					placeholder='Your Company Name'
					name='company'
					value={state.company}
					onChange={handleChange}
				/>
			</div>
			<div className={'register__form--btn-group'}>
				<button
					className={'btn btn--cta u-margin-top-medium u-link-hover'}
					block='true'
					onClick={handlePreviousClick}>
					Previous
				</button>
				<button
					className={'btn btn--cta u-margin-top-medium u-link-hover'}
					block='true'
					onClick={handleNextClick}>
					Next
				</button>
			</div>
		</React.Fragment>
	);

	const StepThree = (
		<React.Fragment>
			<div className={'register__form--group'}>
				<label htmlFor=''>Password</label>
				<input
					type='password'
					placeholder='Create a new password'
					name='password'
					value={state.password}
					onChange={handleChange}
				/>
			</div>
			<div className={'register__form--group'}>
				<label htmlFor=''>Confirm Password</label>
				<input
					type='password'
					placeholder='Confirm your password'
					name='confirm_password'
					value={state.confirm_password}
					onChange={handleChange}
				/>
			</div>
			<div className={'register__form--btn-group'}>
				<button
					className={'btn btn--cta u-margin-top-medium'}
					block='true'
					type='reset'
					onClick={handlePreviousClick}>
					Previous
				</button>
				<button
					className={'btn btn--cta u-margin-top-medium u-link-hover'}
					// disabled={
					// 	state.username === '' ||
					// 	state.email === '' ||
					// 	state.password === ''
					// }
					type='submit'
					block='true'>
					Complete Sign Up
				</button>
			</div>
		</React.Fragment>
	);

	// if (currentState.isAuthenticated) {
	// 	return <Redirect to='/home' />;
	// }
	return (
		<React.Fragment>
			<div className='register'>
				<h1 className='u-margin-bottom-small login--emoji'>
					{' '}
					<span role='img' aria-label='pen'>
						🖊️
					</span>
				</h1>
				<h1 className='heading--primary text__content--black u-margin-bottom-small'>
					Welcome!
				</h1>
				<p className='text__content text__content--grey'>
					Create a new account
				</p>
				<form className='register__form u-margin-top-small'>
					{step === 0 && StepOne}
					{step === 1 && StepTwo}
					{step === 2 && StepThree}
				</form>

				<span className='u-margin-top-medium'>
					Already have an account?{' '}
					<Link to='/auth/signin' className={'text--link'}>
						Sign In
					</Link>
				</span>
			</div>
		</React.Fragment>
	);
};

export default Register;
