import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {conbineHome, conbineAbout} from '../store/container/connectCounter.js'
import Topics from '../modules/topics.js'
import Detail from '../modules/detail.js'


const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={conbineHome}/>
      <Route path="/about" component={conbineAbout}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/topics/:topicId" component={Detail}/>
    </div>
  </Router>
)

export default Routers