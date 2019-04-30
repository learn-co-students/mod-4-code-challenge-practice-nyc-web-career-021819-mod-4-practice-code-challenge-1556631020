import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state={
    eaten: false,
    price: this.props.sushi.price
  }

  clickHandler = () => {
    this.setState({
      eaten: !this.state.eaten
    })
    this.props.eatHandler(this.state)
  }

  render(){
    console.log(this.state.eaten)
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.clickHandler}>
          {this.state.eaten ? null:
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

export default Sushi
