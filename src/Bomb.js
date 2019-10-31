// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        const SECONDS_LEFT = this.state.secondsLeft

        if (SECONDS_LEFT === 0)
        return  <div>Boom!</div>;
        else
        return (
            <div>{SECONDS_LEFT} seconds left before I go boom!</div>
        );
    }
}