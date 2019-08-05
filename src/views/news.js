import React, { Component } from 'react'
import '../style/news.css'
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
export default class News extends Component{
  render(){
    const arr = [
      {
        to:'/newsDetail/1',
        name: '新闻1'
      },
      {
        to:'/newsDetail/2',
        name: '新闻2'
      },
      {
        to:'/newsDetail/3',
        name: '新闻3'
      }
    ]
    return(
      <BrowserRouter basename="/news">
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
                    <Route
                      path={item.path}
                      component={item.component}
                      key={index}>
                    </Route>
                  )
                })
              }
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}