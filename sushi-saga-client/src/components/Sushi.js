import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log("SushiProps", props)

  let sushi = props.sushis.find(sushio => sushio.id === props.sushiId)
  console.log("Sushi:", sushi, sushi.eaten)
  return (

    <div className="sushi">
      <div className="plate" 
           onClick={props.eatSushi(sushi.id)}>
        { sushi.eaten ? null : <img src={sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi