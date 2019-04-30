import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    firstIndex: 0,
    secondIndex: 4
  }

  renderSushi() {
    return this.props.uneatenSushi.slice(this.state.firstIndex, this.state.secondIndex).map(uneatenSushi => <Sushi eatSushi={this.props.eatSushi} key={uneatenSushi.id} uneatenSushi={uneatenSushi} eatenSushi={this.props.eatenSushi} />)
  }

  handleClick = () => {
    this.setState({
      firstIndex: this.state.firstIndex + 4,
      secondIndex: this.state.secondIndex + 4
    })
  }

  render() {
    return (
      <div className="belt">
        {this.renderSushi()}
        <MoreButton handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default SushiContainer
