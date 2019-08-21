import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from '../views/home.js'
import News from '../views/news.js'
import User from '../views/user.js'
import Not from '../views/404.js'
export default class RouterIndex extends Component{
  render(){
    return(
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/user" component={User}/>
        {/* /news/newsDetail/3 */}
        <Route path="/news" component={News} render={() => (<Redirect to="/user"/>)}/>
        <Route path="*" component={Not}/>
      </Switch>
    )
  }
}