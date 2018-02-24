import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import About from '../modules/about.js'
import Home from '../modules/home.js'
import Topics from '../modules/topics.js'
import Detail from '../modules/detail.js'


const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/topics/:topicId" component={Detail}/>
    </div>
  </Router>
)

export default Routers