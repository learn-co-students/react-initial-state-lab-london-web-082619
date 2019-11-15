// your ImageSlider code here!
import React, {Component} from 'react';

class ImageSlider extends React.Component {

    state = {
        currentSlideIndex: 0

    }



    render() {
        return ( 
            <div>
            I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}

export default ImageSlider