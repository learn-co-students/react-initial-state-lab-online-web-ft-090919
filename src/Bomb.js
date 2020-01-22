// your Bomb code here!
import React, { Component} from 'react'

class Bomb extends Component {
  constructor(props) {  //props that the component gets from its parent
    super(props)
    this.state = {  //initial state with a key of 'someKey' set to the 'someValue' prop
      secondsLeft: props.InitialCount
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
