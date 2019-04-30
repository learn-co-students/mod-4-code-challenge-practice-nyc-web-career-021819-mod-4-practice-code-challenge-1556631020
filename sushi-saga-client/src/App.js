import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddMoney from './components/AddMoney';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    displayStart: 0,
    displayEnd: 4,
    eatenSushi: [],
    money: 100,
  }

  componentDidMount(){
    fetch(API)
    .then(res=>res.json())
    .then(sushis => {
      this.setState({
        sushis: sushis
      })
    })
  }

  moreSushi = () => {
    this.setState(prevState => ({
      displayStart: prevState.displayStart + 4,
      displayEnd: prevState.displayEnd + 4,
    }))
  }

  eatSushi = (sushi) => {
    this.setState(prevState => ({
      eatenSushi: [...prevState.eatenSushi, sushi],
      money: prevState.money - sushi.price
    }))
  }

  render() {
    return (
      <div className="app">
        < AddMoney />
        <SushiContainer eatenSushi={this.state.eatenSushi} sushis={this.state.sushis} eatSushi={this.eatSushi} moreSushi={this.moreSushi} money={this.state.money} displayStart={this.state.displayStart} displayEnd={this.state.displayEnd}/>
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;
