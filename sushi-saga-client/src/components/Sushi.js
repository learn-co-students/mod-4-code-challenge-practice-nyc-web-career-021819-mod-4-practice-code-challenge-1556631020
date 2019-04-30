import React, { Fragment, Component } from 'react'


class Sushi extends Component {



 state = {
   eaten: false
 }

 eatSushi = () => {
   if (this.state.eaten === false) {
   this.setState({
    eaten: true
   })

   this.props.chargeCustomer(this.props.piece.price)
   this.props.createPlate()
   }
   else {
     alert ("This piece of sushi has already been eaten!")
   }
 }

  render (){
  return (

    <div className="sushi">
      <div className="plate"
           onClick={this.eatSushi}>
        {this.state.eaten ?
            null
          :
            <img alt='' src={this.props.piece.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.piece.name} - ${this.props.piece.price}
      </h4>
    </div>

    )
  }
}

export default Sushi
