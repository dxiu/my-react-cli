import React, { Component } from 'react'
export default class NewDetail extends Component{
  render() {
    const params = this.props.match.params
    return (
      <div className="wrap">detail{params.id}</div>
    )
  }
}