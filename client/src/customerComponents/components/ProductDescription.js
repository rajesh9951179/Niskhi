import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

function ProductDescription() {
  const [showShippingDetails, setShowShippingDetails] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0); // New state to handle star rating
  const [review, setReview] = useState(''); // New state to handle the review input

  const toggleShippingDetails = () => {
    setShowShippingDetails(!showShippingDetails);
  };

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (review.trim() === '') {
      alert('Please write a review before submitting.');
      return;
    }
    alert('Thank you for your review!');
    // Clear the form and rating after submission
    setReview('');
    setRating(0);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h5>Product Description</h5>
      <p>Daksh bandi is made of stripe printed modal satin with highlighted buttons.</p>
      
      <button
        onClick={toggleShippingDetails}
        style={{ 
          marginTop: '10px',
          backgroundColor: 'green',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          color: '#fff'
        }}
      >
        {showShippingDetails ? 'Hide Shipping Details' : 'Show Shipping Details'}
      </button>
      
      {showShippingDetails && (
        <div style={{ marginTop: '10px' }}>
          <h6>Shipping Details</h6>
          <p>We offer free shipping Pan India for all prepaid orders.</p>
          <p>COD orders are chargeable at flat 200/- INR.</p>
          <p>For COD orders we will require an advance amount of 30% of the Total Order Value. Our sales team will contact you over WhatsApp or call within 24 hours. Orders will be added in production once we have received the advance.</p>
          <p>Our dispatch timeline is 10-12 days while delivery may take 3-7 working days depending on the location.</p>
          <p>Return/exchange requests are accepted within 7 days of delivery.</p>
          <p>Exchanges are accepted only once with additional charges of flat 350/- INR.</p>
          <p>We do not provide monetary refunds. The amount of your purchase will be credited in your Baise Gaba wallet on the occasion of returns and will be valid for 6 months, applicable on your next purchase.</p>
          <p>Custom-made and sale items do not qualify for return/exchange.</p>
          <p>The colors seen in the image may slightly vary from the actual product due to different computer screen resolutions and displays.</p>
        </div>
      )}

      {/* Social Media Icons */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', width: '100%' }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ marginRight: '15px' }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ marginRight: '15px' }}>
          <FaTwitter size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ marginRight: '15px' }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <FaPinterest size={24} />
        </a>
      </div>

       {/* Customer Reviews  */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h5>Customer Reviews</h5>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
            {[...Array(5)].map((star, index) => (
              <FaStar 
                key={index} 
                color={index < rating ? "#d8a48f" : "#e4e5e9"} 
                size={24} 
                style={{ cursor: 'pointer' }} 
                onClick={() => handleStarClick(index)} 
              />
            ))}
            <span style={{ marginLeft: '10px', color: '#a0a0a0' }}>Be the first to write a review</span>
          </div>
          <button
            onClick={toggleReviewForm}
            style={{ 
              backgroundColor: '#d8a48f',
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              color: '#fff'
            }}
          >
            Write a review
          </button>
        </div>

        {showReviewForm && (
          <form onSubmit={handleSubmitReview} style={{ marginTop: '20px', textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
            <h6>Write a Review</h6>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              {[...Array(5)].map((star, index) => (
                <FaStar 
                  key={index} 
                  color={index < rating ? "#d8a48f" : "#e4e5e9"} 
                  size={24} 
                  style={{ cursor: 'pointer' }} 
                  onClick={() => handleStarClick(index)} 
                />
              ))}
            </div>
            <textarea
              rows="4"
              style={{ width: '100%', padding: '10px', borderColor: '#d8a48f' }}
              placeholder="Write your review here..."
              value={review}
              onChange={handleReviewChange}
            ></textarea>
            <button
              type="submit"
              style={{
                marginTop: '10px',
                backgroundColor: '#d8a48f',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                color: '#fff'
              }}
            >
              Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ProductDescription;