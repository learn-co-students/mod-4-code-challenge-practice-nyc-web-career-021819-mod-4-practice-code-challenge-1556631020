import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import v4 from 'uuid'

export default class SushiContainer extends React.Component{

  state = {
    index: 0
  }

  renderSushi = () => {
    // doesn't account for the full circle.. logic is flawed. 
    if (this.state.index + 4 > this.props.sushi.length - 1) {
      const remainingSushi = this.props.sushi.slice(this.state.index, this.props.sushi.length - 1)
      const beginningSushi = this.props.sushi.slice(0, remainingSushi.length)
      const currentSushi = remainingSushi.concat(beginningSushi)
      return currentSushi.map(sushi => {
        return <Sushi budget={this.props.budget} key={v4()} ateSushi={this.props.ateSushi} sushi={sushi}/>
      })
    } else {
    const currentSushi = this.props.sushi.slice(this.state.index, this.state.index + 4)
    return currentSushi.map(sushi => {
      return <Sushi budget={this.props.budget} key={v4()} ateSushi={this.props.ateSushi} sushi={sushi}/>
    })
    }

  }

  handleClick = (e) => {
    this.setState( prevState => {
      return {
        index: prevState.index + 4
      }
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushi()
          }
          <MoreButton handleClick={this.handleClick}/>
        </div>
      </Fragment>
    )
  }
}
