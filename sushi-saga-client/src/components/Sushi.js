import React, { Fragment } from 'react'

const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" onClick={props.eatSushi}>
        {props.eatenSushi.includes(props.uneatenSushi) ? null : <img id={props.uneatenSushi.id} src={props.uneatenSushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.uneatenSushi.name} - ${props.uneatenSushi.price}
      </h4>
    </div>
  )
}

export default Sushi
