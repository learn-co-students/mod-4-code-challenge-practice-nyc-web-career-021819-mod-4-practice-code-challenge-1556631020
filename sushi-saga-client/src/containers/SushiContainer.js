import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = () => {
    let i = 0
    let j = i + 4
    return props.uneatenSushi.slice(i, j).map(uneatenSushi => <Sushi eatSushi={props.eatSushi} key={uneatenSushi.id} uneatenSushi={uneatenSushi} eatenSushi={props.eatenSushi} />)
  }

  const cycleSushi = () => {
    let i = 0
    while (i < props.uneatenSushi.length) {
      let j = i + 4
      let sushiToBeRendered = props.uneatenSushi.slice(i, j)
      i = i + 1
      console.log(sushiToBeRendered);
    }

  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton cycleSushi={cycleSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
