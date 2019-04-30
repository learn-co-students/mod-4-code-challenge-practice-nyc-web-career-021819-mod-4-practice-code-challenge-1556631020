import React, { Fragment } from 'react'

class Sushi extends React.Component {

  render () {
    return (
      <div className="sushi">
        <div id={this.props.sushi.id} className="plate" onClick={this.props.handleClick} price={this.props.sushi.price} name={this.props.sushi.name}>
          {false ? null : <img src={this.props.sushi.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
