import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
	state = {
		sushis: [],
		sushiAte: []
	};

	componentDidMount() {
		fetch(API).then((res) => res.json()).then((json) => {
			// console.log(json);
			this.setState({
				sushis: json
			});
		});
	}

	nextSushis = () => {
		// let count = 0;
		// let next = this.state.sushis.slice(count, count + 4);
		// count = count + 4;
		// return next;
	};

	nextRound = () => {
		// sushisConsumed = this.state.sushis.slices(0, 4);
		// this.setState({});
		//this function needs get fired when click is trigger
	};

	eatingSushi = () => {
		//this should eating sushi
	};

	render() {
		// console.log(this.state.sushis);
		return (
			<div className="app">
				<SushiContainer sushis={this.state.sushis.slice(0, 4)} eatingSushi={this.eatingSushi} />
				<Table eatenSushi={this.state.sushiAte} />
			</div>
		);
	}
}

export default App;
