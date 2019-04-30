import React, { Component, Fragment } from 'react';
import Sushi from '../components/Sushi';
import MoreButton from '../components/MoreButton';

class SushiContainer extends React.Component {
  state={
    sushi:[],
    counter: 0,
    newSushiArr: []
  }

  componentDidMount() {
    fetch(this.props.api)
    .then(resp => resp.json())
    .then(sushi => (
      this.setState({
        sushi: sushi
      })
    ))
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({
      counter: this.state.counter + 4
    })
  }

  render() {
    let sushi = this.state.sushi.slice(this.state.counter, (this.state.counter + 4)).map(sushi => (
      <Sushi
        sushi={sushi}
        key={sushi.id}
        handlePrice={this.props.handlePrice}
        total={this.props.total}
      />
    ))
    return (
      <Fragment>
        <div className="belt">
          {sushi}
          <MoreButton handleClick={this.handleClick}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer;
