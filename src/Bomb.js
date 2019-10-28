import React, { Component } from "react";

class Bomb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    if (this.state.secondsLeft) {
      return `${this.state.secondsLeft} seconds left before I go boom!`;
    } else {
      return "Boom!";
    }
  }

}

export default Bomb