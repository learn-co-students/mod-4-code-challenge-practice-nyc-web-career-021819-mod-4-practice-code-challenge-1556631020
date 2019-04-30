//for some reason at the last minute my sushi pictures stopped disappearing!!!


import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [{}],
    moneyRemaining: 140,
    plateStack: []
  }

  chargeCustomer = (price) => {
    if (this.state.moneyRemaining - price >= 0){
    this.setState({
      moneyRemaining: this.state.moneyRemaining - price
    })
    }
    else {
      alert("You don't have enough money to buy that!")
    }

  }

  createPlate = () => {
    this.setState({
      plateStack: [...this.state.plateStack,"eaten sushi!"]
    })
  }

  componentDidMount = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushi: data
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  chargeCustomer = {this.chargeCustomer} sushi = {this.state.sushi} createPlate = {this.createPlate}/>
        <Table moneyRemaining={this.state.moneyRemaining} plateStack={this.state.plateStack} />
      </div>
    );
  }
}

export default App;
