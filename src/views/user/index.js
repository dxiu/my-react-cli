import React, { Component } from 'react'
// import axios from 'axios'
import { upload } from '../../api/personData'
export default class User extends Component{
  constructor() {
    super()
    this.state = {
      name: 'dx',
      file: [],
      url: ''
    }
    this.files = []
  }
  uploadImg(e) {
    this.files = Array.from(e.target.files)
    this.setState({
      file: this.files
    })
    this.studyBlob()
    const formData = new FormData();  // 创建form对象
    this.files.forEach((item) => {
      formData.append('file', item)
    })
    // upload(formData).then(res => {
    //   console.log(res)
    // })
  }
  studyBlob() {
    const blob = new Blob(this.files)
    // createObjectURL
    const url = URL.createObjectURL(blob)
    // FileReader
    const fileReder = new FileReader()
    fileReder.readAsDataURL(blob)
    fileReder.onload = (res) => {
      // 图
     console.log(res)
    }
    this.setState({
      url: url
    })
  }
  upLoad() {
    const blob = new Blob(["I scream. You scream. We all scream for ice cream."])
    console.log(navigator)
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob)
    }
  }
  uploadSql(e) {
    const blob = new Blob(e.target.files)
    const reader = new FileReader()
    reader.addEventListener('load', function() {
      console.log(this.result)
      upload(this.result).then(res => {
        console.log(res)
      })
    })
    reader.readAsArrayBuffer(blob)
  }
  componentDidUpdate() {
    
  }
  render(){
    return(
      <div>
        <input accept="image/*" type="file" multiple onChange={this.uploadImg.bind(this)}/>
        {this.state.am ?(this.state.am+this.state.name):this.state.name}
        <button onClick={this.studyBlob.bind(this)}>blob</button>
        <img src={this.state.url} alt="" />
        <button onClick={this.upLoad.bind(this)}>测试下载</button>
        <div className="upload_file">
          <input type="file" onChange={this.uploadSql.bind(this)}/>
        </div>
      </div>
    )
  }
}
