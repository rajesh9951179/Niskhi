import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from '../../vendorComponents/components/Navbar';
import Sidebar from '../../vendorComponents/components/Sidebar';
import Product from '../../vendorComponents/components/Product';
import Dashboard from '../../vendorComponents/components/Dashboard'; 
import AddProductForm from '../../vendorComponents/components/AddProductForm'; 
import Registration from '../../vendorComponents/components/Registration';
import VendorLogin from '../../vendorComponents/components/VendorLogin';
import ForgetPassword from '../../vendorComponents/components/ForgetPassword';
import SetPassword from '../../vendorComponents/components/SetPassword';

export default function VendorApp() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const location = useLocation();

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Determine if Navbar and Sidebar should be shown based on the current path
  const showNavbarAndSidebar = !(
    location.pathname === '/login/vendor' ||
    location.pathname === '/register'
  );
  
  return (
    <div style={{ /* styles */ }}>
      <Link to="/login/vendor" style={{ /* styles */ }}>
        <div style={{ /* styles */ }}>
          <h2>Vendor</h2>
        </div>
      </Link>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {showNavbarAndSidebar && (
          <>
            <Sidebar isVisible={sidebarVisible} />
            <Navbar sidebarVisible={sidebarVisible} handleSidebarToggle={handleSidebarToggle} />
          </>
        )}
        <div
          style={{
            flex: 1,
            marginLeft: showNavbarAndSidebar && sidebarVisible ? '250px' : '0',
            transition: 'margin-left 0.3s ease',
          }}
        >
          <main style={{ padding: '20px' }}>
            <Routes>
              
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Product />} />
              <Route path="/AddProductForm" element={<AddProductForm />} />
              <Route path="/login/vendor" element={<VendorLogin />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/setpassword" element={<SetPassword />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
