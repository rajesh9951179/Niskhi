import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {showSidebarAndNavbar && <Sidebar isVisible={sidebarVisible} />}
      <div style={{ flex: 1, marginLeft: showSidebarAndNavbar && sidebarVisible ? '250px' : '0', transition: 'margin-left 0.3s ease' }}>
        {showSidebarAndNavbar && <Navbar sidebarVisible={sidebarVisible} handleSidebarToggle={handleSidebarToggle} />}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/login/vendor" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Product />} />
            <Route path="/AddProductForm" element={<AddProductForm />} />
          </Routes>
        </main>
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
