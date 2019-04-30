import React, { Fragment } from 'react';

const Sushi = (props) => {
	let clicked = false;

	const handleClick = (e) => {
		// console.log(e.target.src);
		// if (e.target.src === true) {
		// 	props.sushi.img_url = null;
		// } else {
		// 	clicked = true;
		// }
	};

	return (
		<div className="sushi" onClick={handleClick}>
			<div className="plate">{clicked ? null : <img src={props.sushi['img_url']} width="100%" />}</div>
			<h4 className="sushi-details">
				{props.sushi.name} - ${props.sushi.price}
			</h4>
		</div>
	);
};

export default Sushi;
