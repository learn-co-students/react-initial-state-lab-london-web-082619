// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {

    state = {
        currentSlideIndex: 0
    }

    render () {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
            I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}

export default ImageSlider