import React, { Component } from 'react'
import '../assets/css/style.css'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
    this.props.onValueChange(e.target.value)
  }

  render() {
    return (
      <div className="re-input">
        <input placeholder={this.props.placeholder} onChange={this.handleChange}></input>
        <h4>{this.state.value}</h4>
      </div>
    )
  }
}

export default Input