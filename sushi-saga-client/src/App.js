import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {


  state = {
    sushiData: [],
    sushiList: [],
    eatenSushi: []
  }



  componentDidMount() {
     fetch('http://localhost:3000/sushis')
       .then(response => response.json())
       .then(data => {
         console.log(data)
         this.setState({
           sushiData: [data],
           sushiList: [data[0], data[1], data[2], data[3]]
         })
         console.log(this.state.sushiList)
       })
   }



ateSushiClick = (event) => {
     //need to remove sushi from plate
     //need to add sushi to an "eaten sushi" array
     //need to add an empty plate to table - do this in app because table is a sibling and doesn't have access to sushicontainer
  console.log(event.target)
   console.log("ate sushi")
   }


  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiData={this.state.sushiData}
          sushiList={this.state.sushiList}
          ateSushiClick={this.ateSushiClick}
        />
        <Table />
      </div>
    );
  }
}

export default App;
