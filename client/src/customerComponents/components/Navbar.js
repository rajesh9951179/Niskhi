import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaSearch, FaHeart, FaUser, FaShoppingBag } from 'react-icons/fa';
import './Navbar.css';
import logoMain from '../images/logoMain.png';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleClose = () => {
    setExpanded(false);
  };

  return (
    <>
      {/* Top bar for the discount offer */}
      <div className="text-center" style={{ backgroundColor: '#c8a59d' }}>
        <marquee>GET FLAT 10% OFF ON YOUR FIRST PURCHASE | USE CODE: BG10</marquee>
      </div>

      <Navbar expand="lg" className="navi py-1" expanded={expanded} onToggle={setExpanded}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
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
          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            <Nav className="flex-column flex-md-row mx-auto">
              <LinkContainer to="/newarrivals">
                <Nav.Link onClick={handleToggleClose}>New Arrivals</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/bestseller">
                <Nav.Link onClick={handleToggleClose}>Bestseller</Nav.Link>
              </LinkContainer>
              <NavDropdown title="women" id="women-dropdown">
                <LinkContainer to="/anarkali">
                  <NavDropdown.Item onClick={handleToggleClose}>Anarkali</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/lehenga">
                  <NavDropdown.Item onClick={handleToggleClose}>Lehenga</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/sarees">
                  <NavDropdown.Item onClick={handleToggleClose}>Sarees</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/dresses">
                  <NavDropdown.Item onClick={handleToggleClose}>Dresses</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="men" id="men-dropdown">
                <LinkContainer to="/shirts">
                  <NavDropdown.Item onClick={handleToggleClose}>Shirts</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kurtaset">
                  <NavDropdown.Item onClick={handleToggleClose}>Kurta Set</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/jackets">
                  <NavDropdown.Item onClick={handleToggleClose}>Jackets</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="kids" id="kids-dropdown">
              <LinkContainer to="/lehengakids">
                  <NavDropdown.Item onClick={handleToggleClose}>Lehenga Kids</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/ghararasets">
                  <NavDropdown.Item onClick={handleToggleClose}>Gharara Sets</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kidsdresses">
                  <NavDropdown.Item onClick={handleToggleClose}>Kids Dresses</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/readytoship">
                <Nav.Link onClick={handleToggleClose}>Ready to Ship</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/specialprice">
                <Nav.Link className="text-danger" onClick={handleToggleClose}>Special Price</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/account">
                <Nav.Link onClick={handleToggleClose}>Account</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/payment">
                <Nav.Link onClick={handleToggleClose}>Payment</Nav.Link>
              </LinkContainer> */}
            </Nav>

            <Nav className="flex-column flex-md-row">
              <LinkContainer to="/slideoutsearchbox">
                <Nav.Link onClick={handleToggleClose}><FaSearch /></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/wishlist">
                <Nav.Link onClick={handleToggleClose}><FaHeart /></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link onClick={handleToggleClose}><FaUser /></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link onClick={handleToggleClose}>
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
