import React, { Fragment } from 'react'
import v4 from 'uuid'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={v4()} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.budget } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.plates)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table