import React from 'react';

const MoreButton = (props) => {
	const handleClick = (e) => {
		console.log(e.target);
		// nextRound();
	};

	return (
		<button onClick={handleClick} nextRound={props.nextRound}>
			More sushi!
		</button>
	);
};

export default MoreButton;
