// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    countdownText = () => {
        if (this.state.secondsLeft > 0) {
            return (this.state.secondsLeft + ' seconds left before I go boom!')
        } else {
            return 'Boom!'
        }
    }

    render() {
        return (
            <div>
                {this.countdownText()} 
            </div>
        )
    }


}

export default Bomb 
