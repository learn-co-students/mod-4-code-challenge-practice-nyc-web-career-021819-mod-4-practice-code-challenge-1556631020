import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

 class SushiContainer extends Component {

   state = {
     sushiPosition:0
   }

    renderSushi = (x) => {
    let sushiArray = this.props.sushi.map((piece)=> {
      return <Sushi key={Math.random()} piece={piece} chargeCustomer = {this.props.chargeCustomer} createPlate = {this.props.createPlate}/>
    })
    return sushiArray.slice(x, x+4)
  }

  rotateSushi = () => {
    if (this.state.sushiPosition === 96) {
      this.setState({
        sushiPosition: 0
      })
    }
    else {
    this.setState({
      sushiPosition: this.state.sushiPosition+4
    })
    }
  }

  render() {
  return (
    <Fragment>
      <div className="belt">
        {
        this.renderSushi(this.state.sushiPosition)
        }
        <MoreButton rotateSushi = {this.rotateSushi} />
      </div>
    </Fragment>
  )
}

}

export default SushiContainer
