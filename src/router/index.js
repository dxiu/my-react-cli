
import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Home from '../views/home.js'
import News from '../views/news.js'
import User from '../views/user.js'
import Not from '../views/404.js'
import NewsDetail from '../views/newsDetail.js'
const routes = [
  {
    path: '/',
    exact: true,
    component:  Home
  },
  {
    path: '/user',
    exact: true,
    component:  User
  },
  {
    path: '/news',
    component: News,
    children: [
      {
        path: '/newsDetail/:id',
        component: NewsDetail
      }
    ]
  },
  {
    path: '*',
    component: Not
  }
]
export default class RouterIndex extends Component{
  render(){

    return(
      <div>
        <Switch>
        {
            routes.map((item,index) => {
              if(item.exact) {
                return <Route 
                  path={item.path} 
                  exact 
                  component={item.component} key={index}>
                </Route>
              } else {
                return <Route path={item.path}
                  // 有子路由
                  render={(props) => {
                    return <item.component data={item.children}/>
                  }}
                  key={index}>
                </Route>
              }
            })
          }
        </Switch>
      </div>
    )
  }
}