// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`


    return (
      <div>
        <h1>{message}</h1>
      </div>
    )
  }
}

export default Bomb
