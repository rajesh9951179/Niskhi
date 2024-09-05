import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import img05 from '../Images/img05.png';
import img06 from '../Images/img06.png';
import img07 from '../Images/img07.png';
import img08 from '../Images/img08.png';
import img09 from '../Images/img09.png';
import img10 from '../Images/img10.png';



const products = [
  
  { id: 5, img: img05, title: 'Gaming Laptop', details: 'High Performance Laptop (Model 2024)', categories: ['Electronics', 'Gaming'], status: 'In stock', attributes: { color: ['#000'], size: '15.6 inches' }, price: { current: 1199, original: 1500 }, date: '30 Aug 2023' },
  { id: 6, img: img06, title: 'Sports Watch', details: 'Waterproof Sports Watch (Model 2023)', categories: ['Accessories', 'Sports'], status: 'In stock', attributes: { color: ['#ff5722', '#03a9f4'], size: 'One Size' }, price: { current: 129, original: 150 }, date: '10 Oct 2023' },
  { id: 7, img: img07, title: 'Leather Jacket', details: 'Genuine Leather Jacket (Model 2023)', categories: ['Fashion'], status: 'In stock', attributes: { color: ['#000'], size: 'S M L XL' }, price: { current: 199, original: 250 }, date: '20 Aug 2023' },
  { id: 8, img: img08, title: 'Bluetooth Speaker', details: 'Portable Speaker (Model 2023)', categories: ['Electronics'], status: 'In stock', attributes: { color: ['#333', '#666'], size: 'One Size' }, price: { current: 79, original: 100 }, date: '25 Aug 2023' },
  { id: 9, img: img09, title: 'Smartphone Case', details: 'Protective Case (Model 2023)', categories: ['Accessories'], status: 'In stock', attributes: { color: ['#ff4081', '#4caf50'], size: 'One Size' }, price: { current: 19, original: 30 }, date: '05 Sep 2023' },
  { id: 10, img: img10, title: 'Fitness Tracker', details: 'Health Monitoring Tracker (Model 2024)', categories: ['Electronics', 'Health'], status: 'In stock', attributes: { color: ['#ffeb3b', '#c2185b'], size: 'One Size' }, price: { current: 149, original: 200 }, date: '15 Sep 2023' }
];

function Discount() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f8fa' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '10px', backgroundColor: '#fff', overflow: 'hidden' }}>
        <thead style={{ backgroundColor: '#f4f5f7' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #e9ecef', fontWeight: 'bold', color: '#333' }}>
              <input type="checkbox" />
            </th>
            <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #e9ecef', fontWeight: 'bold', color: '#333' }}>PRODUCT & TITLE</th>
            <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #e9ecef', fontWeight: 'bold', color: '#333' }}>CATEGORIES</th>
            <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #e9ecef', fontWeight: 'bold', color: '#333' }}>STOCK STATUS</th>
            <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #e9ecef', fontWeight: 'bold', color: '#333' }}>ATTRIBUTES</th>
            <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #e9ecef', fontWeight: 'bold', color: '#333' }}>PRICE</th>
            <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #e9ecef', fontWeight: 'bold', color: '#333' }}>DATE</th>
            <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #e9ecef', fontWeight: 'bold', color: '#333' }}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} style={{ borderBottom: '1px solid #e9ecef' }}>
              <td style={{ padding: '15px' }}>
                <input type="checkbox" />
              </td>
              <td style={{ padding: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={product.img} alt="Product" style={{ borderRadius: '5px', width: '50px', height: '50px', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#333' }}>{product.title}</div>
                    <div style={{ color: 'gray', fontSize: '12px' }}>{product.details}</div>
                  </div>
                </div>
              </td>
              <td style={{ padding: '15px', color: '#5e72e4' }}>
                {product.categories.map((category, index) => (
                  <React.Fragment key={index}>
                    <a href="#" style={{ textDecoration: 'none', color: '#5e72e4' }}>{category}</a>{index < product.categories.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </td>
              {/* <td style={{ padding: '15px' }}>
                <span style={{ backgroundColor: '#e3f8e3', color: '#28a745', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>{product.status}</span>
              </td> */}
              <td style={{ padding: '15px' }}>
  <span 
    style={{ 
      backgroundColor: product.status === 'Out of stock' ? '#fdecea' : '#e3f8e3', 
      color: product.status === 'Out of stock' ? '#dc3545' : '#28a745', 
      padding: '4px 8px', 
      borderRadius: '4px', 
      fontSize: '12px' 
    }}
  >
    {product.status}
  </span>
</td>

              <td style={{ padding: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '12px', marginRight: '5px', color: '#333' }}>color:</span>
                  {product.attributes.color.map((color, index) => (
                    <span key={index} style={{ color }}>{'●'}</span>
                  ))}
                </div>
                <div style={{ fontSize: '12px', color: 'gray' }}>Size: {product.attributes.size}</div>
              </td>
              <td style={{ padding: '15px', fontWeight: 'bold', color: '#333' }}>
                ${product.price.current} <span style={{ textDecoration: 'line-through', color: 'gray' }}>${product.price.original}</span>
              </td>
              <td style={{ padding: '15px', color: 'gray' }}>{product.date}</td>
              <td style={{ padding: '15px' }}>
                <FaEdit style={{ color: '#ffc107', cursor: 'pointer', marginRight: '10px' }} />
                <FaTrashAlt style={{ color: '#dc3545', cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Discount;