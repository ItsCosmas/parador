import React from 'react';
import icons from '../../assets/icons/sprite.svg';

import './SearchBar.scss';

const SearchBar = () => {
	return (
		<form action='' className={'searchbar'}>
			<input
				type='search'
				className={'searchbar__input'}
				placeholder='Search Parador Rooms'
			/>
			<button className={'searchbar__button'}>
				<svg className={'searchbar__icon'}>
					<use xlinkHref={`${icons}#${'icon-search'}`} />
				</svg>
			</button>
		</form>
	);
};

export default SearchBar;
