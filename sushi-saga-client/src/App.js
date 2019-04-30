import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    cashRemaining: 30,
    index: 0,
    eatenSushiIds:[],
    tooLittleMoneyAlert: false
  }
  moreSushi = () => this.setState({index: this.state.index + 4})
  eatASushi = (props) => {
    switch(true){
    case props.price > this.state.cashRemaining:
      this.setState({tooLittleMoneyAlert: true})
      break;
    case this.state.eatenSushiIds.includes(props.id):
      null
      break;
    default:
    this.setState({
      eatenSushiIds: [...this.state.eatenSushiIds, props.id],
      cashRemaining: (this.state.cashRemaining - props.price),
      tooLittleMoneyAlert: false
      })
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(res => this.setState({sushis: res}))
  }

  addMoney = (num) => {this.setState({cashRemaining: this.state.cashRemaining + parseInt(num)})}

  render() {
    return (
      <div className="app">

        <SushiContainer sushis={this.state.sushis} eatenSushiIds={this.state.eatenSushiIds} index={this.state.index} eatASushi={this.eatASushi} moreSushi={this.moreSushi}/>
        <Table cashRemaining={this.state.cashRemaining} addMoney={this.addMoney} tooLittleMoneyAlert={this.state.tooLittleMoneyAlert} eatenSushiIds={this.state.eatenSushiIds}/>
      </div>
    );
  }
}

export default App;
