import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushi: [],
    remaining: 100
  }

  eatHandler = (sushi) => {
    console.log(sushi)
    if (!sushi.eaten && this.state.remaining > sushi.price) {
      this.setState({remaining: this.state.remaining - sushi.price})
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushi => this.setState({sushi: sushi}))
  }

  render() {
    console.log(this.state.sushi)
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eatHandler={this.eatHandler}/>
        <Table sushi={this.state.sushi} remaining={this.state.remaining}/>
      </div>
    );
  }
}

export default App;
