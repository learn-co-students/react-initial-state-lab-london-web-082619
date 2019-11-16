// your Bomb code here!
import React from 'react'
export default class Bomb extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state ={secondsLeft: props.initialCount}
    // }
    state = {
        secondsLeft: this.props.initialCount
    }
    
    componentDidMount() {
        this.timer = setInterval(() => {
            if(this.state.secondsLeft > 0 ) 
            this.decrement()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        
    }
    
    
    decrement = () => {
        this.setState({
            secondsLeft: this.state.secondsLeft - 10 
        })
    }

    render() {
        const boom= this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div>
                {boom}
            </div>
        )
    }
}
