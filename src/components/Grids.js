import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Grids.css';
import image_1_1 from '../images/image_1_1.jpg';
import image_1_2 from '../images/image_1_2.jpg';
import image_2_1 from '../images/image_2_1.jpg'
import image_3_1 from '../images/image_3_1.jpg'
import image_4_1 from '../images/image_4_1.jpg'
import image_5_1 from '../images/image_5_1.jpg'
import image_6_1 from '../images/image_6_1.jpg'
import image_2_2 from '../images/image_2_2.jpg'
import image_3_2 from '../images/image_3_2.jpg'
import image_4_2 from '../images/image_4_2.jpg'
import image_5_2 from '../images/image_5_2.jpg'
import image_6_2 from '../images/image_6_2.jpg'

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button className="slick-prev" onClick={onClick}>
    <span>&#10094;</span> {/* Left Arrow Symbol */}
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slick-next" onClick={onClick}>
    <span>&#10095;</span> {/* Right Arrow Symbol */}
  </button>
);

function Grids() {
  // State to manage which image is hovered and which is clicked
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const settings = {
    dots: false, // Disable dots
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    nextArrow: <NextArrow />, // Custom Next Arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false // Disable dots for this breakpoint
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [image_1_1, image_2_1, image_3_1, image_4_1, image_5_1, image_6_1];
  const hoverImages = [image_1_2, image_2_2, image_3_2, image_4_2, image_5_2, image_6_2]; // Add hover images here

  return (
    <div className='carousel1' style={{ marginTop: 70 }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className='box'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            <div className="image-container">
              <img
                src={hoveredIndex === index ? hoverImages[index] : img} // Display hover image on hover
                alt={`Image ${index + 1}`}
                className={`main-image ${hoveredIndex === index ? 'visible' : ''}`}
                
              />
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Grids;
