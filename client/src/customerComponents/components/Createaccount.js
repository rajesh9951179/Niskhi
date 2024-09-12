
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function Createaccount() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!formData.FirstName) errors.FirstName = 'First Name is required.';
    if (!/^[a-zA-Z]+$/.test(formData.FirstName)) errors.FirstName = 'Invalid format. Only letters allowed.';
    
    if (!formData.LastName) errors.LastName = 'Last Name is required.';
    if (!/^[a-zA-Z]+$/.test(formData.LastName)) errors.LastName = 'Invalid format. Only letters allowed.';
    
    if (!formData.email) errors.email = 'Email is required.';
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) errors.email = 'Email must be a valid Gmail address.';
    
    if (!formData.password) errors.password = 'Password is required.';
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
      errors.password = 'Password must be 8+ characters, include an uppercase letter, a number, and a special character.';
    }
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      alert(response.data.message);
      navigate('/Login');
    } catch (error) {
      alert('Error creating account: ' + (error.response?.data?.message || 'Unexpected error occurred.'));
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0 }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Create Account</h2>
        
        {['FirstName', 'LastName', 'email', 'password'].map(field => (
          <div key={field} style={{ marginBottom: '1.5rem' }}>
            <label htmlFor={field} style={{ display: 'block', fontSize: '1rem' }}>{field.replace(/([A-Z])/g, ' $1').trim()}</label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              className="form-control"
              id={field}
              name={field}
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              style={{ height: '50px', width: '100%' }}
            />
            {errors[field] && <p style={{ color: 'red' }}>{errors[field]}</p>}
          </div>
        ))}
        
        <Button type="submit" style={{ width: '100%' }}>Create Account</Button>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to='/Login'>Already have an account? Login here</Link>
        </div>
      </form>
    </div>
  );
}

export default Createaccount;
