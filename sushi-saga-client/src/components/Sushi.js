import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  handleClick = () => {
    this.setState({
      eaten: true
    })
    this.props.handlePlateClick(this.props.price)
  }


  render(){
    return (
    <div className="sushi">
      <div className="plate"
           onClick={this.handleClick}>
        {
        this.state.eaten ?
            null
          :
            <img src={this.props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.name} - ${this.props.price}
      </h4>
    </div>
  )
  }
}

export default Sushi
