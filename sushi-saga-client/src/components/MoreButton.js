import React from 'react'

const MoreButton = (props) => {

  const handleClick=e=>{
    props.rendered
  }
    return <button onClick={handleClick}>
            More sushi!
          </button>
}

export default MoreButton
