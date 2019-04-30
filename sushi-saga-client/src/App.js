import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './containers/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    budget: 100,
    plates: []

  }

  getSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(res=>{
      this.setState({
        sushi: res
      })
    })
  }

  addMoney = (money) => {
    const intMonet = parseInt(money)
    this.setState(prevState => {
      return {
        budget: prevState.budget + intMonet
      }
    })
  }

  eatenSushi = (eatenSushi) => {
    return [...this.state.sushi].map(sushi => {
      if (sushi.id === eatenSushi.id) {
        return {...sushi, ...{eaten: true}}
      } else {
        return sushi
      }
    })
  }

  ateSushi = (eatenSushi) => {
    this.setState(prevState => {
      return {
        sushi: this.eatenSushi(eatenSushi),
        budget: prevState.budget - eatenSushi.price,
        plates: [...prevState.plates, eatenSushi.price]
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiWallet addMoney={this.addMoney}/>
        <SushiContainer  budget={this.state.budget} ateSushi={this.ateSushi} sushi={this.state.sushi}/>
        <Table budget={this.state.budget} plates={this.state.plates}/>
      </div>
    );
  }

  componentDidMount() {
    this.getSushi()
  }
}

export default App;