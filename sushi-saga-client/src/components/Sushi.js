import React from 'react'

const Sushi = (props) => {

  const {sushi, money, eatenSushi} = props
  const handleClick = () => money > 0 && sushi.price <= money ? props.eatSushi(sushi) : null

    return (
      <div className="sushi">
        <div className="plate" onClick={eatenSushi.includes(sushi) ? null : handleClick} >
        {eatenSushi.includes(sushi) ? null : <img src={sushi.img_url} width="100%" alt="sushi"/>}
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
}

export default Sushi
