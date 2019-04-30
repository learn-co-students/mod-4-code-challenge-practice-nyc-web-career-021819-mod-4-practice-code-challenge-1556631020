import React from 'react'

export default class SushiWallet extends React.Component {

    state = {
        input: ''
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addMoney(this.state.input)
    }

    render() {
        console.log(this.state.input)
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
              Add Money:
              <input type="text" value={this.state.input} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
    }
}