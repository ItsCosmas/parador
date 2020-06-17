import React from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../assets/icons/sprite.svg';

import roomImage from '../../assets/img/roomImage.jpg';

function RoomCard(props) {
	return (
		<div className='room__card'>
			<figure className='room__card--fig'>
				<Link className='room__card--link'>
					<img
						src={roomImage}
						alt='Blog Header'
						className='room__card--img'
					/>
				</Link>
			</figure>
			<div className='room__card--content'>
				<div className='room__card--tag'>Deluxe</div>
				{/* <Link className='room__card--link'> */}
				<h4 className='room__card--title'>Twiga Left Wing</h4>
				{/* </Link> */}
				<p className='room__card--desc'>
					But I must explain to you how all this mistaken idea of
					denouncing pleasure and praising pain was born and I will
					give you a complete account of the system, and expound the
					actual teachings of the great explorer of the truth, the
					master-builder of human happiness. No one rejects, dislikes,
					or avoids pleasure itself, because it is pleasure, but
					because those who do not know how to pursue pleasure
				</p>
			</div>
			<div className='room__card--flex-row'>
				<div className='room__card--price'>Ksh. 20,000</div>
				<div className='room__card--action'>
					<button className='btn btn--icon'>
						<svg className='btn--icon-shape'>
							<use
								xlinkHref={`${sprite}#${'icon-calendar-check-o'}`}
							/>
						</svg>
						<span>Book Now</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default RoomCard;
