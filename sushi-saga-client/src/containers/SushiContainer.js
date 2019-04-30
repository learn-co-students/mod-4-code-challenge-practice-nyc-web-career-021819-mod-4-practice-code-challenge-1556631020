import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state ={
    firstIndex: 0,
    secondIndex: 4
  }

  clickHandler = () => {
    console.log('clicked')
    if (this.state.firstIndex !== 96) {
      this.setState({
        firstIndex: this.state.firstIndex + 4,
        secondIndex: this.state.secondIndex + 4
      })
    } else {
      alert("Sorry, we're out of sushi!!")
    }
  }

  render(){
    console.log(this.props.sushi)
    let allSushi = this.props.sushi.map(s => <Sushi key={s.id} sushi={s} eatHandler={this.props.eatHandler}/>)
    let currentSushi = allSushi.slice(this.state.firstIndex, this.state.secondIndex)
    return (
      <Fragment>
        <div className="belt">
          {currentSushi}
          <MoreButton clickHandler={this.clickHandler}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
