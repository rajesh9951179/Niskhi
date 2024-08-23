import React from 'react';
import  { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { FaSearch, FaHeart, FaUser, FaShoppingBag } from 'react-icons/fa';
import './Navbar.css';
import logoMain from '../images/logoMain.png';
import BestSeller from './BestSeller';
import { LinkContainer } from 'react-router-bootstrap';
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <>
      {/* Top bar for the discount offer */}
      <div className="text-center py-1 mr-0" style={{ backgroundColor: '#c8a59d' }}>
        <marquee>GET FLAT 10% OFF ON YOUR FIRST PURCHASE | USE CODE: BG10</marquee>
      </div>

      <Navbar
      collapseOnSelect
      expand="lg"
      bg={expanded ? "transparent" : "light"} // Use transparent when expanded
      variant="light"
      className={`navi py-1 ${expanded ? "bg-transparent" : "bg-light"}`} // Apply classes based on expanded state
    >
      <Container fluid>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logoMain}
              height="60" // Adjusted height for better alignment
              className="d-inline-block align-top rounded-circle "
              style={{ opacity: 0.3 }}
              alt="NIKSHI"
            />
            <span 
              className="ms-2 d-none d-md-inline-block align-top" // Adds spacing between logo and text
              style={{ 
                fontFamily: 'serif', 
                fontSize: '1.5rem', // Adjusted font size
                color: '#99664f',
              }}
            >
              NIKSHI COUTURE
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            <Nav className="flex-column flex-md-row mx-auto">
            <LinkContainer to="/NewArrivals">
                <Nav.Link>NewArrivals</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/BestSeller">
                <Nav.Link>Bestseller</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Women" id="women-dropdown">
        <LinkContainer to="/women/1">
          <NavDropdown.Item>Subcategory 1</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to="/women/2">
          <NavDropdown.Item>Subcategory 2</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
      
      <NavDropdown title="Men" id="men-dropdown">
        <LinkContainer to="/men/1">
          <NavDropdown.Item>Subcategory 1</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to="/men/2">
          <NavDropdown.Item>Subcategory 2</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
              <Nav.Link href="Kids">Kids</Nav.Link>
              <NavDropdown title="Collection" id="collection-dropdown">
                <NavDropdown.Item href="#collection/1">Subcategory 1</NavDropdown.Item>
                <NavDropdown.Item href="#collection/2">Subcategory 2</NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/ReadyToShip">
        <Nav.Link>Ready to Ship</Nav.Link>
      </LinkContainer>
      
      <LinkContainer to="/SpecialPrice">
        <Nav.Link className="text-danger">Special Price</Nav.Link>
      </LinkContainer>
    </Nav>
    
    <Nav className="flex-column flex-md-row">
      <LinkContainer to="/search">
        <Nav.Link><FaSearch /></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/wishlist">
        <Nav.Link><FaHeart /></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/account">
        <Nav.Link><FaUser /></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/cart">
        <Nav.Link>
                <FaShoppingBag />
                <span className="badge rounded-circle translate-middle bg-danger text-white p-0" style={{ fontSize: '12px' }}>0</span>

              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
