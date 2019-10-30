  
import React, { Component } from 'react';

export default class Bomb extends Component {

    state={
        secondsLeft: this.props.initialCount
    }



    render() {
        if (this.state.secondsLeft === 0){
            return (
                <div>
                    {`Boom!`}
                </div>
            )
        }
        else{
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
}