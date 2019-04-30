import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const shuffled = props.sushis.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 4);

  const renderSushis = () => {
      return selected.map(s => {
        return <Sushi sushi={s}/>
      })
    }

  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
          <MoreButton rendered={renderSushis()}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
