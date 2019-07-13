import React, { Component } from 'react'
import newsDetail from './newsDetail'
import '../style/news.css'
import {
  // BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
export default class News extends Component{
  render(){
    console.log('news========')
    return(
      <div className="news_wrap">
        <ul>
          <li className="left_nav">
            <NavLink to="/news/newsDetail/1">
              新闻1</NavLink>
          </li>
          <li className="left_nav">
            <NavLink to="/news/newsDetail/2">新闻2</NavLink>
          </li>
          <li className="left_nav">
            <NavLink to="/news/newsDetail/3">新闻3</NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/news/newsDetail/:id"
            component={newsDetail}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}