import React from 'react';
const { Component } = require("react");

// your ImageSlider code here!
export default class ImageSlider extends Component {
    constructor () {
        super();
        this.state = {
            currentSlideIndex: 0
        }
    }

    slide = () => {
        const newSlide = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: newSlide
        })
    }
    
    render() {
        return <div onClick = {this.slide}>I am on slide {this.state.currentSlideIndex}</div>
    }
}
