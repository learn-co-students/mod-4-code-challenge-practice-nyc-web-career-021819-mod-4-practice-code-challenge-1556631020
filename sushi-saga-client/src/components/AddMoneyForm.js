import React, {Component} from 'react'

class AddMoneyForm extends Component{

  state = {
    value: 0
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render(){
    return (
    <form onSubmit={(e) => {
      e.preventDefault()
      this.props.addMoney(this.state.value)}}>
    <label>
       <p>Would you like to add more money?</p>
       <input type="number" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Add Money"/>
    </form>)
  }

}

export default AddMoneyForm
