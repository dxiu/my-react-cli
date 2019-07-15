import React, { Component } from 'react'
// import newsDetail from './newsDetail'
import '../style/news.css'
import {
  // BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
export default class News extends Component{
  render(){
    const arr = [
      {
        to:'/news/newsDetail/1',
        name: '新闻1'
      },
      {
        to:'/news/newsDetail/2',
        name: '新闻2'
      },
      {
        to:'/news/newsDetail/3',
        name: '新闻3'
      }
    ]
    return(
      <div className="news_wrap">
        <ul>
          {
            arr.map((item, index) => {
              return (
                <li className="left_nav" key={index}>
                  <NavLink to={item.to}>{item.name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <div>
          <Switch>
            {
              this.props.data && this.props.data.map((item,index) => {
                return (
                  <Route path={item.path} component={item.component} key={index}></Route>
                )
              })
            }
          </Switch>
        </div>
      </div>
    )
  }
}