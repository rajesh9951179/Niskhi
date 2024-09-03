import React from 'react';
import './Contactus.css'; // Import the CSS file

function Contactus() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center contact-content">
          <h5>Registered Address:</h5>
          <p>A - 58, Nityanand Nagar, Queens road,<br />
          Jaipur 302021</p>

          <h5>Warehouse Address:</h5>
          <p>1/37, Mangalam Riico industrial area, Kanakpura, Sirsi road,<br />
          Jaipur 302034</p>

          <h5>Contact details:</h5>
          <p>Email: <a href="mailto:support@baisegaba.com">support@baisegaba.com</a></p>
          <p>For order and sales related queries: <a href="tel:+917878756159">+91 7878756159</a></p>
          <p>For other queries: <a href="tel:+918955882831">+91 8955882831</a></p>
          <p>For career opportunities: <a href="mailto:careers@baisegaba.com">careers@baisegaba.com</a></p>
          <p>For retail and popups: <a href="mailto:baisegaba@gmail.com">baisegaba@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
