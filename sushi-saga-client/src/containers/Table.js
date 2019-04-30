import React, { Fragment } from 'react'

const Table = ({money, eatenSushi}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(eatenSushi)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
