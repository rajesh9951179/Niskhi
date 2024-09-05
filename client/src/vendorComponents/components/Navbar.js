import React, { useState } from 'react';
import { HiMenu, HiSearch } from 'react-icons/hi';
import { FiBell } from 'react-icons/fi';
import { FaUserCircle, FaCogs, FaDollarSign, FaSignOutAlt } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';

const Navbar = ({ sidebarVisible, handleSidebarToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSearchClick = () => setShowSearch(!showSearch);
  const handleNotificationsClick = () => setShowNotifications(!showNotifications);
  const handleProfileMenuClick = () => setShowProfileMenu(!showProfileMenu);

  return (
    <nav
      style={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            color: 'gray',
          }}
          onClick={handleSidebarToggle}
        >
          <HiMenu size={24} />
        </button>
        <button
          style={{
            backgroundColor: '#3874ff1a',
            border: 'none',
            color: '#3874ff',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          New Task
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'solid',
                outline: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '14px',
                color: 'black',
                width: '200px',
                marginRight: '10px',
                borderWidth: '1px',
                borderColor: '#f7f8fa'
              }}
            />
          )}
          <HiSearch
            size={24}
            onClick={handleSearchClick}
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: 'gray',
              transition: 'color 0.3s ease',
            }}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <FiBell
            size={24}
            onClick={handleNotificationsClick}
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: 'gray',
              transition: 'color 0.3s ease',
            }}
          />
          {showNotifications && (
            <Dropdown.Menu
              show={showNotifications}
              style={{
                position: 'absolute',
                top: '100%',
                right: '0',
                width: '200px',
                padding: '10px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                zIndex: 1000,
              }}
            >
              <Dropdown.Item href="#">Notification 1</Dropdown.Item>
              <Dropdown.Item href="#">Notification 2</Dropdown.Item>
              <Dropdown.Item href="#">Notification 3</Dropdown.Item>
            </Dropdown.Menu>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <FaUserCircle
            size={30}
            onClick={handleProfileMenuClick}
            style={{
              cursor: 'pointer',
              color: 'gray',
              transition: 'color 0.3s ease',
            }}
          />
          <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'black' }}>Maria GibSon</span>
            <span style={{ fontSize: '12px', color: 'gray' }}>Admin</span>
          </div>
          {showProfileMenu && (
            <Dropdown.Menu
              show={showProfileMenu}
              style={{
                position: 'absolute',
                top: '100%',
                width: '200px',
                padding: '10px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                zIndex: 1000,
                right: '0'
              }}
            >
              <Dropdown.Item href="#">
                <FaUserCircle style={{ marginRight: '10px' }} />
                Profile
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <FaCogs style={{ marginRight: '10px' }} />
                Settings
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <FaDollarSign style={{ marginRight: '10px' }} />
                Earnings
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <FaSignOutAlt style={{ marginRight: '10px' }} />
                Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;