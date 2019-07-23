import React, { Component } from 'react';
import '../style/head.css';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
// import * as ReactRouterDom from 'react-router-dom'
import routes from '../router/index'
// console.log(ReactRouterDom)
class App extends Component{
  state={
    navArr: []
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
      <BrowserRouter>
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
      </BrowserRouter>
    )
  }
}

export default App;
