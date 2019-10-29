import React from 'react'

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    bombEvaluation = () => {
        if (this.state.secondsLeft > 0) {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        } else {
            return <div>Boom!</div>
        }
    }
    
    render() {
        return (
            <div>{this.bombEvaluation()}</div>
        )
    }
}
