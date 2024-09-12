import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Grids.css';

const PrevArrow = ({ onClick }) => (
  <button className="slick-prev" onClick={onClick}>
    <span>&#10094;</span>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slick-next" onClick={onClick}>
    <span>&#10095;</span>
  </button>
);

function Grids({ images = [], hoverImages = [], names = [], prices = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate(); 

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleGridClick = (index) => {
    const product = {
      image: images[index],
      hoverImage: hoverImages[index],
      name: names[index],
      price: prices[index]
    };
    // Navigate to ProductPage and pass product data via state
    navigate('/ProductPage', { state: { product } });
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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

  return (
    <div className='carousel1' style={{ marginTop: 70 }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className='box'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleGridClick(index)} // Navigate on click
          >
            <div className="image-container">
              <img
                src={hoveredIndex === index ? hoverImages[index] : img}
                alt={`Image ${index + 1}`}
                className={`main-image ${hoveredIndex === index ? 'visible' : ''}`}
              />
            </div>
            <div className="info-container">
              <h3 className="item-name">{names[index]}</h3>
              <p className="item-price">₹ {prices[index]}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Grids;