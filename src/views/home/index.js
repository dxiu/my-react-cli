import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from "antd";
class Home extends Component {
  constructor(argument) {
    super(argument)
    this.props.dispatch(action => {
      action({
        type: '2'
      })
    })
  }
  render() {
    return(
      <div>
        <h2>首页</h2>
        <div className="item_nav">首页item_nav</div>
        <Button type="primary">按钮</Button>
      </div>
    )
  }
  componentDidMount() {
  }
}
export default connect(state => state.details)(Home)