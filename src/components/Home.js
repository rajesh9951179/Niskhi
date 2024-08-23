import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from '../images/slider_1.jpg';
import slider_2 from '../images/slider_2.jpg';
import slider_3 from '../images/slider_3.jpg';

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Carousel fade>
            <Carousel.Item>
              <img
                src={slider_1}
                alt="First slide"
                className="d-block w-100"
                style={{ height: 'auto', minHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={slider_2}
                alt="Second slide"
                className="d-block w-100"
                style={{ height: 'auto', minHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={slider_3}
                alt="Third slide"
                className="d-block w-100"
                style={{ height: 'auto', minHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
