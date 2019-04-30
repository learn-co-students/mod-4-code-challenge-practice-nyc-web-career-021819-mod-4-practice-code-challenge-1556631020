import React, { Component } from 'react'

class Sushi extends Component {

  state ={
    clicked: false
  }

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    })
    )
  }


  render () {

    console.log('in sushi', this.state.clicked)

    return (
      <div className="sushi">
      <div className="plate"
      onClick={this.handleClick}>
      {
        this.state.clicked ?
        null
        :
        <img src={this.props.sushi.img_url} width="100%" />
      }
      </div>
      <h4 className="sushi-details">
      {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
      </div>
    )
  }
}



// <div className="plate"
//      onClick={/* Give me a callback! */ null}>
//   {
//     /* Tell me if this sushi has been eaten! */
//     true ?
//       null
//     :
//       <img src={/* Give me an image source! */} width="100%" />
//   }
// </div>

export default Sushi
