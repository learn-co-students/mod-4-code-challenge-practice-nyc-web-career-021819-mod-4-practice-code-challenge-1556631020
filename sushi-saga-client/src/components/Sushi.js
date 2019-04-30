import React from 'react'

export default class Sushi extends React.Component {

  handleClick = () => {
    if (this.props.budget < this.props.sushi.price) {
      return
    } else {
      this.props.ateSushi(this.props.sushi)
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.handleClick}>
          { 
            this.props.sushi.eaten ?
              null
            :
            <img alt={"hi"} src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}
