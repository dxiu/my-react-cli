import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    console.log('home111')
    return(
      <div>
        <h2>首页</h2>
        <div className="item_nav">首页item_nav</div>
      </div>
    )
  }
  getData = () => {
   
  }
  componentDidMount() {
  }
}