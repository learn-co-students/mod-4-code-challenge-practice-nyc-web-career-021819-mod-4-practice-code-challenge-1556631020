import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

let count = 0
let index = 0
let id = -1

class SushiContainer extends React.Component {

  renderSushi = () => {
    index = 0
    for (let i = 0; i < 4; i++) {
      index = index + 1
        console.log(this.props.sushi);

      return (
        <Sushi sushi={this.props.sushi.shift()} />
      )
    }
  }

  render () {
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushi.map(sushi => {
              if (count < 4) {
                count += 1
                id+=1
                console.log(count);
                return <Sushi id={id} sushi={sushi} handleClick={this.props.handleClick}/>
              }
              if (count >= 4){
                count = 0

              }
            })
          }
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
