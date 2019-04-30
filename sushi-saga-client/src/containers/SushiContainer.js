import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
	return (
		<Fragment>
			<div className="belt">
				{props.sushis.map((sushi) => {
					return <Sushi sushi={sushi} id={sushi.id} />;
				})}
				<MoreButton sushis={props.sushis} nextRound={props.nextRound} />
			</div>
		</Fragment>
	);
};

export default SushiContainer;
