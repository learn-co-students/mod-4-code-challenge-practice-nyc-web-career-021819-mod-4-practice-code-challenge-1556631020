import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    uneatenSushi: [],
    eatenSushi: [],
    budget: 50
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({ uneatenSushi: data }) )
  }

  eatSushi = (e) => {
    let sushi = this.state.uneatenSushi.find(sushi => sushi.id === parseInt(e.target.id))
    if (this.state.budget - sushi.price >= 0) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        budget: this.state.budget - sushi.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} uneatenSushi={this.state.uneatenSushi} eatenSushi={this.state.eatenSushi} />
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
