import React, { Component } from 'react'

class About extends Component {
  render() {
    const {count} = this.props
    return (
      <div>
        <h2>About</h2>
        <div>计数器{count}</div>
      </div>
    )
  }
}

export default About