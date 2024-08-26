import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+918374549473"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        textDecoration: 'none',
        zIndex: 1000,
      }}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;