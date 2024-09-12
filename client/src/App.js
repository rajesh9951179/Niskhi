import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendorApp from './mainComponents/components/VendorApp';
import Chooserole from './mainComponents/components/Chooserole';
import Componentsapp from './mainComponents/components/componentsapp';
import Login from './customerComponents/components/Login';
import VendorLogin from './vendorComponents/components/VendorLogin';
import ForgetPassword from './vendorComponents/components/ForgetPassword'; // Import ForgetPassword component
import Dashboard from './vendorComponents/components/Dashboard'; // Import Dashboard component
import Navbar from './vendorComponents/components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chooserole />} />
        <Route path="/login/customer" element={<Login />} />
        <Route path="/login/vendor" element={<VendorLogin />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} /> {/* Route for ForgetPassword */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for Dashboard */}
        <Route path="/*" element={<Componentsapp />} />
        <Route path="/*" element={<VendorApp />} />
      </Routes>
    </Router>
  );
}

export default App;
