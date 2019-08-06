import React, { Component } from 'react'
import '../style/news.css'
import {
  BrowserRouter,
  NavLink
} from 'react-router-dom'
import NewsRouter from '../router/news'
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
          <NewsRouter/>
        </div>
      </BrowserRouter>
    )
  }
}