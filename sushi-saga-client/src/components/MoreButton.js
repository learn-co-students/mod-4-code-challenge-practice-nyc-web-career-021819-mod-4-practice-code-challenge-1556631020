import React from 'react'

const MoreButton = (props) => {
  console.log('button', props.updateIndex)
    return <button onClick={props.updateIndex}>
            More sushi!
          </button>
}

export default MoreButton
