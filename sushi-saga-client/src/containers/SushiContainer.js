import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        { props.sushis.length > 0 ?
          [0,1,2,3].map(indexAdder => props.sushis[props.index + indexAdder])
          .map(sushi => <Sushi {...sushi} key={sushi.id} eatenSushiIds={props.eatenSushiIds} eatASushi={props.eatASushi}/>)
          : "Loading your sushi bro"
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
