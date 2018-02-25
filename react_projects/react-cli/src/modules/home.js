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
    const {count, addCounter, minusCounter} = this.props
    return (
      <div>
        <h2>Home</h2>
        <a href="/about">About</a>
        <Input placeholder='累了吧..' onValueChange={this.handleValueChange} value={this.state.inputValue} />
        <div>{this.state.inputValue}</div>
        <div onClick={addCounter}>增</div>
        <div>计数器{count}</div>
        <div onClick={minusCounter}>减</div>
      </div>
    )
  }
}

export default Home