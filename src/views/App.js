import React, { Component } from 'react';
import '../style/head.css';
import {
  NavLink
} from 'react-router-dom'
import RouterIndex from '../router/index';
class App extends Component{
  constructor(arg) {
    super(arg)
    this.state={
      navArr: []
    }
  }
  componentDidMount() {
    const arr = [
      {
        to:'/',
        con:'首页'
      },
      {
          to:'/user',
          con:'用户中心'
      },
      {
          to:'/news',
          con:'新闻页面'
      }
    ]
    this.setState({
      navArr: arr
    })
  }
  render(){
    return (
      <div className="App">
        <div className="top_nav">
          {
            this.state.navArr.map((item,index)=>{
              return (
                <NavLink className="item_nav"
                key={index}
                to={item.to}
                exact
                activeClassName="active_nav">
                  {item.con}
                </NavLink>
              )
            })
          } 
        </div>
        <RouterIndex/>
      </div>
    )
  }
}
export default App
