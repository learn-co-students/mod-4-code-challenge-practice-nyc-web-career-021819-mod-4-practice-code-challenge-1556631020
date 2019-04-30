import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  renderSushi = () => {
    let fourSushis = this.props.sushis.splice(0, 4)
    return fourSushis.map(sushi =>
      <Sushi {...sushi}  handlePlateClick={this.props.addPrice}/>)
  }

  handleClick = () => {
    console.log('clicked')
    this.renderSushi()
  }



  render(){
    return (
    <Fragment>
      <div className="belt">
        {
          this.renderSushi()
        }
        <MoreButton renderSushi={this.handleClick}/>
      </div>
    </Fragment>
  )
  }
}

export default SushiContainer
