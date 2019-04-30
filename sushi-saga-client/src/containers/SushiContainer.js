import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)

  const renderSushi = () => {
    return props.sushi.slice(0,3).map(s => <Sushi key={s.id} sushi={s} />)
  }

  return (
    <Fragment>
      <div className="belt">
        
         {renderSushi()}
        
        <MoreButton sushi={props.sushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer