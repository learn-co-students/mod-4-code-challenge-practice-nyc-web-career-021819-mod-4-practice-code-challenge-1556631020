import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    plateArray: []
  }


  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data =>
    this.setState({
      sushis: data
    }))
  }

  handlePlateClick = (price) => {
    this.setState({
      plateArray: [...this.state.plateArray, price]
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  addPrice = {this.handlePlateClick} sushis={this.state.sushis}/>
        <Table plateArray ={this.state.plateArray}/>
      </div>
    );
  }
}

export default App;
