import React, { Component } from 'react'
import { getPesonData } from '../api/personData'
export default class Home extends Component {
  render() {
    return(
      <div>
        <h2>首页</h2>
      </div>
    )
  }
  getData = () => {
    console.log('2222')
    const num = 13656630565
    getPesonData(num)
  }
  componentDidMount() {
    this.getData()
  }
}