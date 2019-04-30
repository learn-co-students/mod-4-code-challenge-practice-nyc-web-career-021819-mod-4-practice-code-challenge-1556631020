import React, { Component, Fragment } from 'react'

class Table extends Component {

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="remaining">
          You have: ${this.props.budget} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {this.renderPlates(this.props.eatenSushi)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Table
