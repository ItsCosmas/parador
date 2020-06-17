import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { LogOut } from '../../redux/reducers/auth/authActions';

import logo from '../../assets/img/logo.svg';
import userPhoto from '../../assets/img/user.jpg';
import sprite from '../../assets/icons/sprite.svg';

import './TopNav.scss';
import SearchBar from '../Search/SearchBar';

const TopNav = () => {
	// const currentState = useSelector((state) => state);

	// const { isAuthenticated, currentUser } = currentState.Auth;

	// const [userDropdown, setUserDropdown] = useState(false);

	// const handleUserDropdown = (e) => {
	// 	e.preventDefault();
	// 	setUserDropdown(!userDropdown);
	// };

	// const dispatch = useDispatch();

	// const logoutUser = () => dispatch(LogOut());

	// const logout = (e) => {
	// 	e.preventDefault();
	// 	logoutUser();
	// };

	// const userProfile = isAuthenticated
	// 	? `/profile/${currentState.Auth.currentUser.id}`
	// 	: '';

	const SignedIn = (
		<React.Fragment>
			<ul className='topnav__list'>
				<li className='topnav__list--item'>
					<Link
						to={'/write'}
						className={
							'topnav__list--link btn btn--cta u-nav-link-hover'
						}>
						Book Now +
					</Link>
				</li>
				<li className='topnav__list--item'>
					<Link to={'/notifications'} className='topnav__list--link'>
						{' '}
						<svg className='topnav__list--icon'>
							<use xlinkHref={`${sprite}#${'icon-bookmark'}`} />
						</svg>
						<span className={'topnav__list--notification'}>10</span>
					</Link>
				</li>
				<li className='topnav__list--item'>
					<figure className='topnav__list--figure'>
						<img
							src={userPhoto}
							alt='User Default'
							className={'topnav__list--image'}
						/>
					</figure>
				</li>
			</ul>
		</React.Fragment>
	);

	const SignedOut = (
		<React.Fragment>
			<ul className='topnav__list'>
				<li className='topnav__list--item'>
					<Link
						to='/signin'
						className={
							'topnav__list--link btn btn--cta u-nav-link-hover'
						}>
						Sign In &gt;
					</Link>
				</li>
			</ul>
		</React.Fragment>
	);
	return (
		<nav className='topnav'>
			<div className='topnav__logo'>
				<img src={logo} alt='' className='topnav__logo--img' />
			</div>
			<SearchBar />
			{/* Hamburger Menu */}
			{/* NOTE: THIS ORDER STRICTLY MATTERS */}
			{/* <input className={'menu-btn'} type='checkbox' id='menu-btn' />
			<label className={'menu-icon'} htmlFor='menu-btn'>
				<span className={'navicon'}></span>
			</label> */}
			{/* {isAuthenticated ? SignedIn : SignedOut} */}
			{SignedIn}
			{/* {SignedOut} */}
		</nav>
	);
};
export default TopNav;
