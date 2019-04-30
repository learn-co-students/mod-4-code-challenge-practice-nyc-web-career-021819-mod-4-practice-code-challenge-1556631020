import React, { Fragment } from 'react'
import AddMoneyForm from '../components/AddMoneyForm'


const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.cashRemaining } remaining!
        <p>
        {props.tooLittleMoneyAlert && "You don't have enough money!"}
        <AddMoneyForm addMoney={props.addMoney}/>
        </p>
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushiIds)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
