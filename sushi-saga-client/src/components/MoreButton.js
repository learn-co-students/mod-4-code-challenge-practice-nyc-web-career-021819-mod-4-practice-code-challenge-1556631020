import React from 'react'

const MoreButton = (props) => {
  return <button onClick={(e) => { props.clearTable(e) }}>
    More sushi!
          </button>
}

export default MoreButton