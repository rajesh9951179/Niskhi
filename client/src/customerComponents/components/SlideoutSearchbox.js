import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'; // Ensure this path is correct

const SlideoutSearchbox = () => {
  const [isSearchOpen, setSearchOpen] = useState(true); // Set to true to always show the search bar

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* Search Input */}
      <div className={`search-container ${isSearchOpen ? 'open' : ''} d-flex flex-column align-items-start p-3`}>
        <div className="search-input-container d-flex flex-column align-items-start position-relative">
          <input
            type="text"
            placeholder="Search"
            className="form-control mb-3"
            style={{ 
              maxWidth: '300px', 
              border: 'none',  // Remove border
              boxShadow: 'none',  // Remove box shadow
              outline: 'none',  // Remove default outline
              backgroundColor: 'transparent',  // Remove background color
              padding: '0.5rem',  // Adjust padding as needed
              borderRadius: '0'  // Remove rounded corners
            }}
          />
          <button onClick={toggleSearch} className="close-btn position-absolute">
            &times; {/* Unicode for multiplication mark */}
          </button>
          {/* Line below the search bar */}
          <div style={{ 
            borderBottom: '2px solid #ddd',  // Adjusted width and color
            width: '100%', 
            marginBottom: '1rem'  // Space between the line and the items below
          }}></div>
          {/* Items below the search bar */}
          <ul className="list-unstyled">
            <li className="pb-2"><a href="/pages/about-us" className="text-decoration-none" style={{ color: 'inherit' }}>About Us</a></li>
            <li className="pb-2"><a href="/pages/contact-us" className="text-decoration-none" style={{ color: 'inherit' }}>Contact Us</a></li>
            <li className="pb-2"><a href="/pages/faqs" className="text-decoration-none" style={{ color: 'inherit' }}>FAQ's</a></li>
            <li className="pb-2"><a href="/pages/privacy-cookie-policies" className="text-decoration-none" style={{ color: 'inherit' }}>Privacy & Cookie Policies</a></li>
            <li className="pb-2"><a href="/pages/shipping-return-policies" className="text-decoration-none" style={{ color: 'inherit' }}>Shipping and Return Policies</a></li>
            <li className="pb-2"><a href="/pages/terms-conditions" className="text-decoration-none" style={{ color: 'inherit' }}>Terms & Conditions</a></li>
            <li className="pb-2"><a href="https://www.baisegaba.com/a/returns" className="text-decoration-none" style={{ color: 'inherit' }}>Cancel/Return</a></li>
            <li className="pb-2"><a href="/pages/track-my-order" className="text-decoration-none" style={{ color: 'inherit' }}>Track my Order</a></li>
            <li className="pb-2"><a href="/policies/terms-of-service" className="text-decoration-none" style={{ color: 'inherit' }}>Terms of Service</a></li>
            <li className="pb-2"><a href="/pages/size-chart" className="text-decoration-none" style={{ color: 'inherit' }}>Size Guide</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SlideoutSearchbox;
