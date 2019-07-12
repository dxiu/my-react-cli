import React from 'react';
import '../style/head.css';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import routes from '../router/index'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className="top_nav">
          <li className="item_nav">
            <NavLink to="/" exact activeClassName="active_nav">首页</NavLink>
          </li>
          <li className="item_nav">
            <NavLink to="/news" activeClassName="active_nav">新闻</NavLink>
          </li>
          <li className="item_nav">
            <NavLink to="/about" activeClassName="active_nav">关于我们</NavLink>
          </li>
        </ul>
        <Switch>
        {/* <Route path={routes[1].path} exact={routes[1].exact} component={routes[1].component}></Route> */}
          {
            routes.map((item,index) => {
              if(item.exact) {
                return <Route path={item.path} exact={item.exact} component={item.component} key={index}></Route>
              
              } else {
                return <Route path={item.path} component={item.component} key={index}></Route>
                
              }
            })
          }
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
