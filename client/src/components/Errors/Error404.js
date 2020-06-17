import React from 'react';

import { Link } from 'react-router-dom';

import './Error404.scss';
import logo from '../../assets/img/logo.svg';

const Error404 = () => {
	return (
		<React.Fragment>
			<div className='error404'>
				<nav className='error404__nav'>
					<Link to='/' className={'topnav__list--link'}>
						<div className='topnav__logo'>
							<img
								src={logo}
								alt=''
								className='topnav__logo--img'
							/>
						</div>
					</Link>
					<Link
						to='/'
						className={'btn btn--cta'}
						type='submit'
						block='true'>
						Go Home
					</Link>
				</nav>
				<div className='error404__main'>
					<h1 className='heading--super text--white'>404</h1>
					<h1 className='heading--main text--white u-margin-bottom-small'>
						Oops! Looks like you got lost
					</h1>
					<figure className='error404--figure u-margin-bottom-small'>
						<img
							src={`https://media.giphy.com/media/9r75gWDOv8cWxNqaBI/giphy-downsized.gif`}
							alt='Some Random GIF'
							className='error404--image'
						/>
					</figure>
					<h1 className='heading--sub text--white u-margin-bottom-small'>
						No one has been here in a while, you may want to go.
					</h1>
					<Link
						to='/'
						className={'btn btn--cta'}
						type='submit'
						block='true'>
						Go Home
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Error404;
