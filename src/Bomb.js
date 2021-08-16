import React from 'react';
const { Component } = require("react");

// your Bomb code here!
export default class Bomb extends Component {
    constructor (props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    countdown = () => {
        const lessSeconds = this.state.secondsLeft - 1
        this.setState({
            secondsLeft: lessSeconds
        })
    }
    
    render() {
        if (this.state.secondsLeft !== 0) {
            return <div onClick = {this.countdown}>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
        else {
            return <div>Boom!</div>
        }
    }
}