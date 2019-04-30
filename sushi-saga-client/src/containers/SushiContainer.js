import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import v4 from 'uuid'

const SushiContainer = (props) => {

  const sushis = props.sushis

  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => {
          return <Sushi sushi={sushi} key={v4()} eatSushi={props.eatSushi} />
        })
        }
        <MoreButton clearTable={props.clearTable} />
      </div>
    </Fragment>
  )
}

export default SushiContainer