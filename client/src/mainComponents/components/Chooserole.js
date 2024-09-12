import React from 'react';
import { Link } from 'react-router-dom';

const Chooserole = () => {
    const cardStyle = {
        textDecoration: 'none',
        color: 'black',
        width: '300px',
        height: '100px',
        margin: '10px 0',
        border: '2px solid #ddd',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      };
      
      const cardContentStyle = {
        textAlign: 'center',
      };
  return (
<div>
  <h1 style={{ marginBottom: '20px' }}>Choose Your Role</h1>
  
  <Link to="/login/customer" style={cardStyle}>
    <div style={cardContentStyle}>
      <h2>Customer</h2>
    </div>
  </Link>
  
  <Link to="/login/vendor" style={cardStyle}>
    <div style={cardContentStyle}>
      <h2>Vendor</h2>
    </div>
  </Link>
</div>
  )
}

export default Chooserole
