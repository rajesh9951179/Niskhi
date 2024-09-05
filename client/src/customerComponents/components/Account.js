import React, { useState, useEffect } from 'react';
import Popup from './Popup'; 
import './Account.css'; 
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

function Account() {
  const [activeSection, setActiveSection] = useState('orderHistory');
  const [showPopup, setShowPopup] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (activeSection === 'addressBook') {
      const fetchUserDetails = async () => {
        try {
          const res = await axios.get('http://localhost:5000/createaccountFromDB');
          setUserDetails(res.data);
        } catch (err) {
          console.error('Error fetching user details:', err.response ? err.response.data : err.message);
        }
      };
      fetchUserDetails();
    }
  }, [activeSection]);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleEditAddress = () => {
    handleShowPopup(); 
  };

  const handleDeleteAddress = async () => {
    if (userDetails) {
      try {
        await axios.delete(`http://localhost:5000/deleteUser/${userDetails._id}`);
        setUserDetails(null);
        alert('User deleted successfully');
      } catch (err) {
        console.error('Error deleting user:', err.response ? err.response.data : err.message);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/logout');
      await handleDeleteAddress(); 
    } catch (err) {
      console.error('Error logging out:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <section className="customer-account pt10 pb8">
      <div className="grid__wrapper narrow cg9 sm-cg0">
        <h1 style={{ fontFamily: "Futura" }} className="visually-hidden">Account</h1>
        <div className="span-3 auto">
          <div className="account-sidebar">
            <h3 style={{ fontFamily: "Futura" }} className="a-left border-bottom mb3 pb2">Account Details</h3>
            <br/>
            <div className='headings'>
              <ul className="customer-account__sidebar-links">
                <li>
                  <a
                    className={`customer-account__sidebar-link py2 ${activeSection === 'orderHistory' ? 'active--link' : ''}`}
                    href="#"
                    onClick={() => setActiveSection('orderHistory')}
                  >
                    Order History
                  </a>
                </li>
                <li>
                  <a
                    className={`customer-account__sidebar-link py2 ${activeSection === 'addressBook' ? 'active--link' : ''}`}
                    href="#"
                    onClick={() => setActiveSection('addressBook')}
                  >
                    Address Book
                  </a>
                </li>
                <li>
                  <a
                    className={`customer-account__sidebar-link py2 ${activeSection === 'logout' ? 'active--link' : ''}`}
                    href="#"
                    onClick={() => setActiveSection('logout')}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <hr className="mb2" />
            <p style={{ fontFamily: "Futura" }}>Can't find the answers you're looking for? Email us at support@baisegaba.com</p>
          </div>
        </div>
        <div className="span-9 auto">
          <div className="account-orders">
            {activeSection === 'orderHistory' && (
              <>
                <h3 style={{ fontFamily: "Centaur" }} className="a-left border-bottom mb0 pb2">Order History</h3>
                <p style={{ fontFamily: "Centaur", fontSize:"1.2rem" }}>You haven't placed any orders yet.</p>
              </>
            )}
            {activeSection === 'addressBook' && (
              <>
                <h3 style={{ fontFamily: "Centaur" }} className="a-left border-bottom mb0 pb2">Address Book</h3>
                {userDetails ? (
                  <div className="address-entry">
                    <div>
                      <h5 style={{ fontFamily: "Centaur" }}>{`${userDetails.FirstName} ${userDetails.LastName}`}</h5>
                      <h6 style={{ fontFamily: "Centaur" }}>{userDetails.email}</h6>
                    </div>
                    <div className="address-actions">
                      <FaEdit className="icon" title="Edit" onClick={handleEditAddress} />
                      <FaTrash className="icon" title="Delete" onClick={handleDeleteAddress} />
                    </div>
                  </div>
                ) : (
                  <p>No address book entries found.</p>
                )}
                 <hr className="mb2" />

                <button className="addUser" onClick={handleShowPopup}>ADD A NEW ADDRESS</button>
              </>
            )}
            {activeSection === 'logout' && (
              <>
                <h3 className="a-left border-bottom mb0 pb2">Logout</h3>
                <p style={{ fontFamily: "Centaur", fontSize:"1.2rem" }}>You have successfully logged out.</p>
                <button onClick={handleLogout}>Logout and Delete Account</button>
              </>
            )}
          </div>
        </div>
      </div>
      <Popup show={showPopup} handleClose={handleClosePopup} />
    </section>
  );
}

export default Account;
