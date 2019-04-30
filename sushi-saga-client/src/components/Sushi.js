import React, { Component, Fragment } from 'react'

class Sushi extends Component {
  state ={
    clicked: ''
  }

  handleClick=e=>{
    e.target.remove()
    this.setState({
      clicked: e.target.name
    })
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
             <img src={this.props.sushi.img_url} name={this.props.sushi.name} width="100%"/>
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
