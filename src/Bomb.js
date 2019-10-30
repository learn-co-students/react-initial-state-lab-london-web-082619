// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

    state = {
        secondsLeft: this.props.initialCount
      }

    render () {
        console.log(this.props)
        console.log(this.state)

        return (
            <div>
            {this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!` } 
            </div>
        )
    }
}

export default Bomb