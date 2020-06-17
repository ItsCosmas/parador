import React from 'react';

import RoomCard from './RoomCard';

import './Rooms.scss';

function Rooms() {
	return (
		<div className='rooms'>
			<h1 className='heading--sub u-margin-bottom-small'>All Rooms</h1>
			<div className='rooms__table'>
				<RoomCard />
				<RoomCard />
				<RoomCard />
				<RoomCard />
				<RoomCard />
			</div>
		</div>
	);
}

export default Rooms;
