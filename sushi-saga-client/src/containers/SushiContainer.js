import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import v4 from 'uuid'

const SushiContainer = (props) => {

  const renderSushis = () => {
    return props.sushis.slice(props.displayStart, props.displayEnd).map(sushi => {
      return <Sushi
        key={v4()}
        sushi={sushi}
        eatSushi={props.eatSushi}
        money={props.money}
        eatenSushi={props.eatenSushi}
        />
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
