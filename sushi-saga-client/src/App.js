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

  fetchSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => this.setState({
        sushi: sushi
      }))
  }

  componentDidMount() {
    this.fetchSushi()
  }

  render() {
    console.log(this.state.sushi)
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} />
        <Table money={this.state.money} />
      </div>
    );
  }
}

export default App;