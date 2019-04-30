import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    money: 100
  }

  handleClick = (e) => {
    let price = e.currentTarget.getAttribute('price')
    // let sushis = this.state.sushi.filter(sushi => sushi.name !== e.currentTarget.getAttribute('name'))
    this.setState({
      money: this.state.money - price,
      // sushi: sushis
    })
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushi: sushis
      })
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} handleClick={this.handleClick}/>
        <Table money={this.state.money} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
