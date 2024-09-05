import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css'; // Import Datepicker CSS
import ReactDatePicker from 'react-datepicker'; // Import Datepicker Component
import ProductTable from './ProductTable';
import Draft from './draft';
import Publish from './publish';
import Discount from './discount';
import { format } from 'date-fns'; // Date formatting
import { Dropdown, Button, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { HiSearch } from 'react-icons/hi'; // Import HiSearch from react-icons

const Product = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All'); // State for active tab

  // Function to handle tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {/* Main Content */}
      <div style={{ marginLeft: '0', transition: 'margin-left 0.3s ease' }}>
        <hr style={{ marginTop: '0px' }} />

        {/* Date Picker Component */}
        <div
          style={{ padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div>
            <h1 style={{ fontSize: '20px', color: 'black' }}>Product</h1>
            <p style={{ color: 'gray' }}>
              Robotech / Admin / <span style={{ color: 'blue' }}>Products</span>
            </p>
          </div>
          <div style={{ border: '0.5px solid blue', padding: '5px', borderRadius: '4px', cursor: 'pointer' }}>
            <ReactDatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MMM-yyyy"
              popperPlacement="bottom-end"
              popperProps={{
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 10], // Adjust the offset to prevent overlap
                    },
                  },
                ],
              }}
              customInput={<p style={{ color: 'blue', margin: 0 }}>Today: {format(selectedDate, 'dd-MMM-yyyy')}</p>}
            />
          </div>
        </div>

        {/* Tab Buttons */}
        <div style={{ padding: '15px' }}>
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              display: 'flex',
              gap: '10px',
            }}
          >
            {['All', 'Published', 'Drafts', 'On Discount'].map((tab) => (
              <li
                key={tab}
                style={{
                  display: 'inline',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  color: activeTab === tab ? '#007bff' : '#666',
                  textAlign: 'center',
                  borderBottom: activeTab === tab ? '2px solid #007bff' : 'none',
                }}
                onClick={() => handleTabChange(tab)}
              >
                {tab} {tab === 'All' ? '(4251)' : tab === 'Published' ? '(3255)' : tab === 'Drafts' ? '(25)' : '(532)'}
              </li>
            ))}
          </ul>
          <hr style={{ marginTop: '0px' }} />
        </div>

        {/* Filters and Search */}
        <div
          style={{
            padding: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '15px', padding: '15px' }}>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: '#f7f8fa',
                  borderColor: 'gray',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  color: 'black'
                }}
              >
                All Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Clothes</Dropdown.Item>
                <Dropdown.Item href="/">Electronics</Dropdown.Item>
                <Dropdown.Item href="/">Furniture</Dropdown.Item>
                <Dropdown.Item href="/">Footwear</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: '#f7f8fa',
                  borderColor: 'gray',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  color: 'black'
                }}
              >
                Vendor
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Vendor 1</Dropdown.Item>
                <Dropdown.Item href="/">Vendor 2</Dropdown.Item>
                <Dropdown.Item href="/">Vendor 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px' }}>
            <HiSearch size={20} style={{ margin: '0 10px', color: '#888' }} />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                padding: '5px',
                height: '100%',
                borderRadius: '4px',
                fontSize: '14px',
                color: 'black',
                backgroundColor: '#fff',
              }}
            />
            <Button
              style={{
                backgroundColor: '#5c3dc3',
                border: 'none',
                height: '38px',
                color: 'white',
              }}
              type="button"
            >
              Add Product
            </Button>
          </div>
        </div>

        {/* Product Table */}
        {activeTab === 'All' && <ProductTable />}
        {activeTab === 'Published' && <Publish />}
        {activeTab === 'Drafts' && <Draft />}
        {activeTab === 'On Discount' && <Discount />}
      </div>

      <Pagination style={{ justifyContent: 'end', marginRight: '20px', paddingTop: '5px' }}>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
      </Pagination>

      <footer>
        <hr />
        <div style={{ display: 'flex', marginLeft: '8%', padding: '10px' }}>
          <FontAwesomeIcon icon={faCopyright} style={{ marginRight: '8px', marginTop: '5px' }} />
          <p>2024 Baise Gaba</p>
        </div>
      </footer>
    </>
  );
};

export default Product;