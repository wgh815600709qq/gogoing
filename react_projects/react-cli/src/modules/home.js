import React, { Component } from 'react'
import Input from '../component/greeting.jsx'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleValueChange = this.handleValueChange.bind(this)
  }
  handleValueChange (value) {
    this.setState({inputValue: value})
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Input placeholder='累了吧..' onValueChange={this.handleValueChange} value={this.state.inputValue} />
        <div>{this.state.inputValue}</div>
      </div>
    )
  }
}

export default Home