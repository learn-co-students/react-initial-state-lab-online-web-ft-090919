import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  render() {
    return (
      `I am on slide ${this.state.currentSlideIndex}`
    )
  }
}