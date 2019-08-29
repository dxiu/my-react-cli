import React, { Component } from 'react'
import { connect } from 'react-redux'
class NewDetail extends Component{
  constructor(arg){
    super(arg)
    this.state={}
  }
  componentWillMount() {}
  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(action => {
        action({
          type: 'update_detail',
          data: 'update_detail更新了'
        })
      })
    }, 3000)
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    const params = this.props.match.params
    return (
      <div className="wrap">
        {this.props.detail + ' ' + params.id}
        <div>
        {
          this.props.loading
        }
        </div>
      </div>
    )
  }
  
}
export default connect(state => state.details)(NewDetail)