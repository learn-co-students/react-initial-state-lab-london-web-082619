import React from 'react'

class Bomb extends React.Component {

    constructor(props) {
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {

        const message = (this.state.secondsLeft > 0) ? <p>{this.state.secondsLeft} seconds left before I go boom!</p> : <p>Boom!</p>

        return <div>{message}</div>
    }

}

export default Bomb