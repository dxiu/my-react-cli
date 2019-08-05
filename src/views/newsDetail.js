import React, { Component } from 'react'
import { connect } from 'react-redux'
class NewDetail extends Component{
  constructor(arg){
    super(arg)
    this.state={}
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
}
export default connect(state => state.details)(NewDetail)