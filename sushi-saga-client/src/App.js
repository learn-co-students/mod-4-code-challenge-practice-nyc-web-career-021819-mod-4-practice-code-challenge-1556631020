import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [{
      "id": 1,
      "name": "Tako Supreme",
      "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
      "price": 20,
      "created_at": "2018-07-27T18:53:16.241Z"
    },
    {
      "id": 2,
      "name": "Tsundere Ebi",
      "img_url": "https://sushistickers.com/img/sushi-slice_75.png",
      "price": 15,
      "created_at": "2018-07-27T18:53:16.244Z"
    },
    {
      "id": 3,
      "name": "Oh Sake",
      "img_url": "https://sushistickers.com/img/sushi-slice_29.png",
      "price": 10,
      "created_at": "2018-07-27T18:53:16.248Z"
    },
    {
      "id": 4,
      "name": "Genki Toro",
      "img_url": "https://lh3.googleusercontent.com/-PjRMCz4UOeE/VoWCHXGDi7I/AAAAAAAAAH0/jRL-o0KdB_U/w842-h596/maralbarismos_sushi_cute-01.png",
      "price": 25,
      "created_at": "2018-07-27T18:53:16.251Z"
    },
    {
      "id": 5,
      "name": "Tsundere Ebi",
      "img_url": "https://sushistickers.com/img/sushi-slice_75.png",
      "price": 15,
      "created_at": "2018-07-27T18:53:16.255Z"
    },
    {
      "id": 6,
      "name": "Oh Sake",
      "img_url": "https://sushistickers.com/img/sushi-slice_29.png",
      "price": 10,
      "created_at": "2018-07-27T18:53:16.258Z"
    },
    {
      "id": 7,
      "name": "Genki Toro",
      "img_url": "https://lh3.googleusercontent.com/-PjRMCz4UOeE/VoWCHXGDi7I/AAAAAAAAAH0/jRL-o0KdB_U/w842-h596/maralbarismos_sushi_cute-01.png",
      "price": 25,
      "created_at": "2018-07-27T18:53:16.260Z"
    },
    {
      "id": 8,
      "name": "Tsundere Ebi",
      "img_url": "https://sushistickers.com/img/sushi-slice_75.png",
      "price": 15,
      "created_at": "2018-07-27T18:53:16.264Z"
    },
    {
      "id": 9,
      "name": "Kawaii Maguro",
      "img_url": "https://i.imgur.com/RJGr3Xs.png",
      "price": 10,
      "created_at": "2018-07-27T18:53:16.275Z"
    },
    {
      "id": 10,
      "name": "Tsundere Ebi",
      "img_url": "https://sushistickers.com/img/sushi-slice_75.png",
      "price": 15,
      "created_at": "2018-07-27T18:53:16.279Z"
    },
    {
      "id": 11,
      "name": "Tako Supreme",
      "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
      "price": 20,
      "created_at": "2018-07-27T18:53:16.282Z"
    },
    {
      "id": 12,
      "name": "Tsundere Ebi",
      "img_url": "https://sushistickers.com/img/sushi-slice_75.png",
      "price": 15,
      "created_at": "2018-07-27T18:53:16.284Z"
    },
    {
      "id": 13,
      "name": "Tako Supreme",
      "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
      "price": 20,
      "created_at": "2018-07-27T18:53:16.287Z"
    },
    {
      "id": 14,
      "name": "Genki Toro",
      "img_url": "https://lh3.googleusercontent.com/-PjRMCz4UOeE/VoWCHXGDi7I/AAAAAAAAAH0/jRL-o0KdB_U/w842-h596/maralbarismos_sushi_cute-01.png",
      "price": 25,
      "created_at": "2018-07-27T18:53:16.288Z"
    },
    {
      "id": 15,
      "name": "Tsundere Ebi",
      "img_url": "https://sushistickers.com/img/sushi-slice_75.png",
      "price": 15,
      "created_at": "2018-07-27T18:53:16.290Z"
    },
    {
      "id": 16,
      "name": "Oh Sake",
      "img_url": "https://sushistickers.com/img/sushi-slice_29.png",
      "price": 10,
      "created_at": "2018-07-27T18:53:16.292Z"
    }],
    lastSushiId: 1
  }

  addMoreSushi = () => {
    console.log("prevProps")
    this.setState(prevProps => ({lastSushi: prevProps + 4}, console.log("new state", this.state.lastSushi)))
  }

  componentDidMount() {
    console.log('mounted!');
    (async () => {
      const resp = await fetch(API)
      const sushisFromApi = await resp.json()
      // this.setState({sushis: [...this.state.sushis, sushisFromApi]}, console.log("state:", this.state.sushis))
    })();
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} lastSushiId={this.state.lastSushiId} addMoreSushi={this.state.addMoreSushi}  />
        <Table />
      </div>
    );
  }
}

export default App;