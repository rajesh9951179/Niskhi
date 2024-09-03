import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // Import video-react styles
import './VideoCarousel.css'

function VideoCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1500} className="d-block w-100">
        <div className="video-container">
          <Player
            playsInline
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.mp4"
          />
        </div>
        <Carousel.Caption>
          <h3>Label for video</h3>
          <p>Sample Text for Video</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default VideoCarousel;
