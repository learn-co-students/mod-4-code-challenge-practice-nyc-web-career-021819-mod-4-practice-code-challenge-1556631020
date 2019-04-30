import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log("SCProps", props)

  // let sushiTwo = props.sushis.find(sushi => sushi.id === props.lastSushiId + 1)
  // let sushiThree = props.sushis.find(sushi => sushi.id === props.lastSushiId + 2)
  // let sushiFour = props.sushis.find(sushi => sushi.id === props.lastSushiId + 3)

  return (
    <Fragment>
      <div className="belt">
          <Sushi sushiId={props.lastSushiId} sushis={props.sushis}/>
          <Sushi sushiId={props.lastSushiId + 1} sushis={props.sushis}/>
          <Sushi sushiId={props.lastSushiId + 2} sushis={props.sushis}/>
          <Sushi sushiId={props.lastSushiId + 3} sushis={props.sushis}/>
        <MoreButton onClick={props.addMoreSushi} sushis={props.sushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer