import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import MainHome from './MainHome'; // Assuming this is the main home page for Vendor
import Navbar from '../../vendorComponents/components/Navbar';
import Sidebar from '../../vendorComponents/components/Sidebar';
import Product from '../../vendorComponents/components/Product';
import Dashboard from '../../vendorComponents/components/Dashboard'; 
import AddProductForm from '../../vendorComponents/components/AddProductForm'; 
import Registration from '../../vendorComponents/components/Registration';

function VendorApp() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const showSidebarAndNavbar = location.pathname !== '/';
  
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh', // Adjusted height to move boxes up
      paddingTop: '50px', // Added padding to move content down
    }}>
      
      <Link to="/login/vendor" style={cardStyle}>
        <div style={cardContentStyle}>
          <h2>Vendor</h2>
        </div>
      </Link>

      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {showSidebarAndNavbar && <Sidebar isVisible={sidebarVisible} />}
        <div style={{ flex: 1, marginLeft: showSidebarAndNavbar && sidebarVisible ? '250px' : '0', transition: 'margin-left 0.3s ease' }}>
          {showSidebarAndNavbar && <Navbar sidebarVisible={sidebarVisible} handleSidebarToggle={handleSidebarToggle} />}
          <main style={{ padding: '20px' }}>
            <Routes>
              <Route path="/login/vendor" element={<Registration />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Product />} />
              <Route path="/AddProductForm" element={<AddProductForm />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <VendorApp />
    </Router>
  );
}
