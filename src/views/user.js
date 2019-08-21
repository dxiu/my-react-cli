import React, { Component } from 'react'
// import axios from 'axios'
import { upload } from '../api/personData'
export default class User extends Component{
  
  uploadImg(e) {
    const files = Array.from(e.target.files)
    const formData = new FormData();  // 创建form对象
    files.forEach((item) => {
      formData.append('file', item)
    })
    upload(formData).then(res => {
      console.log(res)
    })
  }
  render(){
    return(
      <div>
        <input accept="image/*" type="file" multiple onChange={this.uploadImg}/>
        用户中心
      </div>
    )
  }
}
