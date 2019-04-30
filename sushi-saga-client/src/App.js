import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushis: []
  }

  getSushis(){
  fetch(API)
  .then(res => res.json())
  .then(data => {this.setState({
    sushis: data
    })
  })

  }

  componentDidMount(){
  this.getSushis()
  }


  removeSushi = (sushi) => {
    this.state({
      sushis: this.state.sushis.filter(s => s.name !== sushi)
    })
  }


  render() {
    return (
      <div className="app">
      <SushiContainer sushis={this.state.sushis} />
      <Table />
      </div>
    );
  }
}

export default App;
