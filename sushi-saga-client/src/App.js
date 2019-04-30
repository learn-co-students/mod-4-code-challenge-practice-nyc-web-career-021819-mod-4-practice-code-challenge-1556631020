import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    selectedSushi: [],
    bill: 200
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        let sushiState = []
        data.forEach(sushi => {
          sushiState.push({ id: sushi.id, name: sushi.name, img_url: sushi.img_url, price: sushi.price, created_at: sushi.created_at, eaten: false })
        })
        this.setState({ sushis: sushiState })
      })
  }

  eatSushi = (e, id) => {

    const sushiArray = [...this.state.sushis]
    const selectedSushis = [...this.state.selectedSushi]
    const pickedSushi = sushiArray.find(sushi => sushi.id === id)
    const idx = sushiArray.findIndex(sushi => sushi.id === id)
    let customerTab = this.state.bill
    customerTab = customerTab - pickedSushi.price
    pickedSushi.eaten = true
    sushiArray[idx] = pickedSushi
    selectedSushis.push(pickedSushi)
    this.setState({ selectedSushi: selectedSushis, sushis: sushiArray, bill: customerTab })
    // this.setState({ sushis: sushiArray })


  }

  makeSushi = () => {
    if (this.state.bill > 0) {
      const sushiBelt = [...this.state.sushis]
      return sushiBelt.splice(0, 4)
      // this.setState({ sushis })
    }
  }


  clearTable = (e) => {
    e.preventDefault()
    const emptyTable = []
    const servedSushis = [...this.state.sushis].splice(0, 4)
    this.setState({ selectedSushi: emptyTable, sushis: servedSushis }, this.makeSushi)

  }



  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.makeSushi()}
          eatSushi={this.eatSushi}
          clearTable={this.clearTable} />
        <Table plates={this.state.selectedSushi} bill={this.state.bill} />
      </div>
    );
  }
}

export default App;