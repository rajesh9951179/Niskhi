import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductPage from './ProductPage';
// import slider_1 from '../images/slider_1.jpg';
// import slider_2 from '../images/slider_2.jpg';
// import slider_3 from '../images/slider_3.jpg';
// import slider_4 from '../images/slider_4.jpg';
import slider_1 from '../images/slider_1.jpg';
import slider_2 from '../images/slider_2.jpg';
import slider_3_1 from '../images/slider_3_1.jpg';
import slider_4_1 from '../images/slider_4_1.jpg';
// import VideoPlayer from '../components/VideoPlayer';
import Grids from '../components/Grids';
import Card from '../components/Card';
import VideoPlayer from '../components/VideoPlayer';
import GridsVideo from '../components/GridsVideo';
// import Card from './Card';
import CategorySection from './Category';
import Login from './Login';
import './Home.css';

// Import images for the first Grids component
import image_1_1 from '../images/image_1_1.jpg';
import image_2_1 from '../images/image_2_1.jpg';
import image_3_1 from '../images/image_3_1.jpg';
import image_4_1 from '../images/image_4_1.jpg';
import image_5_1 from '../images/image_5_1.jpg';
import image_6_1 from '../images/image_6_1.jpg';
import image_1_2 from '../images/image_1_2.jpg';
import image_2_2 from '../images/image_2_2.jpg';
import image_3_2 from '../images/image_3_2.jpg';
import image_4_2 from '../images/image_4_2.jpg';
import image_5_2 from '../images/image_5_2.jpg';
import image_6_2 from '../images/image_6_2.jpg';

// Import images for the second Grids component
import front_1 from '../images/front_1.jpg';
import hover_1 from '../images/hover_1.jpg';
import front_2 from '../images/front_2.jpg';
import hover_2 from '../images/hover_2.jpg';
import front_3 from '../images/front_3.jpg';
import hover_3 from '../images/hover_3.jpg';
import front_4 from '../images/front_4.jpg';
import hover_4 from '../images/hover_4.jpg';
import front_5 from '../images/front_5.jpg';
import hover_5 from '../images/hover_5.jpg';
import front_6 from '../images/front_6.jpg';
import hover_6 from '../images/hover_6.jpg';

// Import images for the first Card component
import card_1_1 from '../images/card_1_1.jpg';
import card_2_1 from '../images/card_2_1.jpg';
import card_3_1 from '../images/card_3_1.jpg';
import card_4_1 from '../images/card_4_1.jpg';
import card_5_1 from '../images/card_5_1.jpg';
import card_6_1 from '../images/card_6_1.jpg';

// Import images for the second Card component
import card_1_2 from '../images/card_1_2.jpg';
import card_2_2 from '../images/card_2_2.jpg';
import card_3_3 from '../images/card_3_3.jpg';
import card_4_4 from '../images/card_4_4.jpg';
import card_5_5 from '../images/card_5_5.jpg';
import card_6_6 from '../images/card_6_6.jpg';

import video_2 from '../images/video-2.mp4';
import video_3 from '../images/video-3.mp4';
import video_4 from '../images/video-4.mp4';
import video_5 from '../images/video-5.mp4';
import video_6 from '../images/video-6.mp4';
import video_7 from '../images/video-7.mp4';


function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignIn = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  const moveSlider = (direction) => {
    const sliderList = sliderRef.current.querySelector('.list');
    const thumbnailList = thumbnailRef.current.querySelectorAll('.item');

    if (direction === 'next') {
      sliderList.appendChild(sliderList.querySelector('.item'));
      thumbnailRef.current.appendChild(thumbnailList[0]);
      sliderRef.current.classList.add('next');
    } else {
      sliderList.prepend(sliderList.querySelector('.item:last-child'));
      thumbnailRef.current.prepend(thumbnailList[thumbnailList.length - 1]);
      sliderRef.current.classList.add('prev');
    }

    sliderRef.current.addEventListener(
      'animationend',
      () => {
        sliderRef.current.classList.remove(direction);
      },
      { once: true }
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider('next');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    // Navigate to ProductPage with an optional product ID (if needed)
    navigate('/ProductPage');

  };
  return (
    <div>
      {isLoggedIn ? (
        <Container fluid>
          <CategorySection className="category-section"/>

          <div className="slider" ref={sliderRef}>
      <div className="list">
        <div className="item">
         
          <div>
           
          </div>
        </div>
        <div className="item">
          <img src={slider_1} alt="" />
          {/* <div className="content">
            <div style={{ color: "black" }} className="title">GRAVE INJUSTICE</div>
            <div style={{ color: "red" }} className="type">IN JUSTICES</div>
            <div style={{ color: "green" }} className="type">SYSTEM</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
            </div>
          </div> */}
        </div>
        <div className="item">
          <img src={slider_2} alt="" />
          {/* <div className="content">
            <div style={{ color: "black" }} className="title">GRAVE INJUSTICE</div>
            <div style={{ color: "red" }} className="type">IN JUSTICES</div>
            <div style={{ color: "green" }} className="type">SYSTEM</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
            </div>
          </div> */}
        </div>
        <div className="item">
          <img src={slider_3_1} alt="" />
          {/* <div className="content">
            <div style={{ color: "black" }} className="title">GRAVE INJUSTICE</div>
            <div style={{ color: "red" }} className="type">IN JUSTICES</div>
            <div style={{ color: "green" }} className="type">SYSTEM</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
            </div>
          </div> */}
        </div>
        <div className="item">
          <img src={slider_4_1} alt="" />
          {/* <div className="content">
            <div style={{ color: "black" }} className="title">GRAVE INJUSTICE</div>
            <div style={{ color: "red" }} className="type">IN JUSTICES</div>
            <div style={{ color: "green" }} className="type">SYSTEM</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        <div className="item">
          <img src={slider_1} alt="" />
        </div>
        <div className="item">
          <img src={slider_2} alt="" />
        </div>
        <div className="item">
          <img src={slider_3_1} alt="" />
        </div>
        <div className="item">
          <img src={slider_4_1} alt="" />
        </div>
        <div className="item">
          <img src={slider_2} alt="" />
        </div>
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={() => moveSlider('prev')}> &lt; </button>
        <button className="next" onClick={() => moveSlider('next')}> &gt; </button>
      </div>
    </div>


<Grids 
        images={[image_1_1, image_2_1, image_3_1, image_4_1, image_5_1, image_6_1]}
        hoverImages={[image_1_2, image_2_2, image_3_2, image_4_2, image_5_2, image_6_2]}
        names={['New Dress', 'New Shirt', 'New Jacket', 'New Skirt', 'New Hat', 'New Shoes']}
        prices={['5500', '3500', '2500', '4500', '1500', '2000']}
      />

<div className='programs'>
  <Card
    image={card_1_1}
    title="Elegant Evening Gown"
    itemCount="50"
    onClick={() => handleCardClick(1)} // Example ID
  />
  <Card
    image={card_5_1}
    title="Cape Dress"
    itemCount="10"
    onClick={() => handleCardClick(2)} // Example ID
  />
  <Card
    image={card_2_1}
    title="Sapphire Serenity Dress"
    itemCount="30"
    onClick={() => handleCardClick(3)} // Example ID
  />
  <Card
    image={card_3_1}
    title="Radiant Red Dress"
    itemCount="20"
    onClick={() => handleCardClick(4)} // Example ID
  />
  <Card
    image={card_4_1}
    title="Opulent Silk Dress"
    itemCount="40"
    onClick={() => handleCardClick(5)} // Example ID
  />
  <Card
    image={card_6_1}
    title="Classic Wrap Dress"
    itemCount="15"
    onClick={() => handleCardClick(6)} // Example ID
  />
</div>


      <VideoPlayer /> 

      <Grids
       images={[front_1, front_2, front_3, front_4, front_5, front_6]}
       hoverImages={[hover_1, hover_2, hover_3, hover_4, hover_5, hover_6]}
       names={['Chiffon Dress', 'Shirt', 'Jacket', 'Skirt', 'Hat', 'Shoes']}
       prices={['5000', '3000', '2000', '4000', '1000', '1500']}
      />      
 {/* <div className='programs'>
        <Card image={card_1_2} title="Kameez Shalwar" itemCount="50" />
        <Card image={card_2_2} title="Bandhgala" itemCount="30" />
        <Card image={card_3_3} title="Bridal Ghagra Choli" itemCount="20" />
        <Card image={card_4_4} title="Bridal pattu Saree" itemCount="40" />
        <Card image={card_5_5} title="Salwar Kameez " itemCount="10" />
        <Card image={card_6_6} title="Gown" itemCount="15" />
      </div> */}
    
    <div className='programs'>
      <Card
        image={card_1_2}
        title="Kameez Shalwar"
        itemCount="50"
        onClick={() => handleCardClick(1)} // Example ID
      />
      <Card
        image={card_2_2}
        title="Bandhgala"
        itemCount="30"
        onClick={() => handleCardClick(2)} // Example ID
      />
      <Card
        image={card_3_3}
        title="Bridal Ghagra Choli"
        itemCount="40"
        onClick={() => handleCardClick(1)} // Example ID
      />
      <Card
        image={card_4_4}
        title="Bridal pattu Saree"
        itemCount="10"
        onClick={() => handleCardClick(2)} // Example ID
      />
       <Card
        image={card_5_5}
        title="Salwar Kameez"
        itemCount="20"
        onClick={() => handleCardClick(2)} // Example ID
      />
      <Card
        image={card_6_6}
        title="Gown"
        itemCount="15"
        onClick={() => handleCardClick(2)} // Example ID
      />
    </div>

      <GridsVideo 
      
      videos={[video_2, video_3, video_4, video_5, video_6, video_7]}
      // hoverVideos={[video_1_2, video_2_2, video_3_2, video_4_2, video_5_2, video_6_2]}
      names={['New Dress', 'New Shirt', 'New Jacket', 'New Skirt', 'New Hat', 'New Shoes']}
      prices={['5500', '3500', '2500', '4500', '1500', '2000']}
      />
         
        </Container>
      ) : (
        <Login onSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default Home;