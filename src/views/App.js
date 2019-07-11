import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import News from './news.jsx'
import Home from './home'
import Not from './404'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>这个是主页面</h1>
        <ul>
          <li>
            <NavLink to="/" exact>首页</NavLink>
          </li>
          <li>
            <NavLink to="/news">新闻</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/news" component={News}></Route>
          <Route component={Not}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
