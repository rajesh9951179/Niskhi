import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import logoMain from '../customerComponents/images/logoMain.png';

function MainHome() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Top bar for the discount offer */}
      <div className="text-center" style={{ backgroundColor: '#c8a59d' }}>
        <marquee>GET FLAT 10% OFF ON YOUR FIRST PURCHASE | USE CODE: BG10</marquee>
      </div>

      {/* Navbar */}
      <Navbar expand="lg" className="navi py-1" expanded={expanded} onToggle={setExpanded}>
        <Container fluid className="justify-content-center">
          <Navbar.Brand as={Link} to="" className="d-flex align-items-center">
            <img
              src={logoMain}
              height="60"
              className="d-inline-block align-top rounded-circle"
              style={{ opacity: 0.3 }}
              alt="NIKSHI"
            />
            <span 
              className="ms-2 d-none d-md-inline-block align-top"
              style={{ 
                fontFamily: 'serif', 
                fontSize: '1.5rem',
                color: '#99664f',
              }}
            >
              NIKSHI COUTURE
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh', // Adjusted height to move boxes up
        paddingTop: '50px', // Added padding to move content down
      }}>
        <h1 style={{ marginBottom: '20px' }}>Choose Your Role</h1>
        
        <Link to="/login/customer" style={cardStyle}>
          <div style={cardContentStyle}>
            <h2>Customer</h2>
          </div>
        </Link>

        <Link to="/login/admin" style={cardStyle}>
          <div style={cardContentStyle}>
            <h2>Admin</h2>
          </div>
        </Link>

        <Link to="/login/vendor" style={cardStyle}>
          <div style={cardContentStyle}>
            <h2>Vendor</h2>
          </div>
        </Link>
      </div>
    </>
  );
}

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

export default MainHome;
