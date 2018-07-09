import React, { Component } from 'react'
import { Button, Toast } from 'zeus'

export default class Page extends React.Component {
  time = 1000
  state = {
    visible: false
  }
  showToast = e => {
    this.setState({
      visible: true
    })
    setTimeout(() => {
      this.setState({ visible: false })
    }, this.time)
  }
  render() {
    const { visible } = this.state
    return <div>
      <Button name="delete" onClick={this.showToast}>删除</Button>
      <Button name="add" onClick={this.showToast} style={{ marginLeft: 16 }}>添加</Button>
      {visible && <Toast>删除成功</Toast>}
    </div>
  }
}
