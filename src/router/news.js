import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import NewsDetail from '../views/newsDetail/index.js'
export default class NewsRouter extends Component{
  render(){

    return(
      <Switch>
        <Route path='/newsDetail/:id' component={NewsDetail} ></Route>
      </Switch>
    )
  }
}
