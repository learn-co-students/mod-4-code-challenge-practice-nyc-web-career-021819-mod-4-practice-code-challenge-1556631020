import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  state = {
    sushis: [],
    currentIndex: 4,
    prevIndex:0
  }

  componentDidMount() {
    fetch('http://localhost:3000/sushis')
      .then(res => res.json())
      .then((sushis) =>
        this.setState({
          sushis: sushis
        })
      )
  }

  updateIndex = () => {
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 4,
      prevIndex: prevState.prevIndex + 4
    })
    )
  }

  renderSushi = () => {
    return this.state.sushis.slice(this.state.prevIndex,this.state.currentIndex).map(sushi =>{
      return <Sushi sushi={sushi} key={sushi.id} />
    })
  }

  render () {
    console.log('sushiContainer', this.state.currentIndex-4)

  return (
      <div className="belt">
        {this.renderSushi()}
        <MoreButton updateIndex={this.updateIndex} />
      </div>

  )
  }
}

export default SushiContainer
