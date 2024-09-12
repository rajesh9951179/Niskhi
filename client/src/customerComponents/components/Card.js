// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ image, title, itemCount, onClick }) => {
  return (
    <div className='program' onClick={onClick}>
      <img src={image} alt={title} />
      <div className="caption">
        <p>{title}</p>
        <p>{itemCount} Items</p>
      </div>
    </div>
  );
};

export default Card;