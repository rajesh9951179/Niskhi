import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Createaccount() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    pswd: ''
  });

  const [errors, setErrors] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    pswd: ''
  });

  const validateFirstName = (firstName) => {
    if (!firstName) return 'First Name is required.';
    if (/[^a-zA-Z]/.test(firstName)) return 'invalid format.';
    return '';
  };
  
  const validateLastName = (lastName) => {
    if (!lastName) return 'Last Name is required.';
    if (/[^a-zA-Z]/.test(lastName)) return 'invalid format.';
    return '';
  };
  

  const validateEmail = (email) => {
    if (!email) return 'Email is required.';
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) return 'Email must be a valid Gmail address.';
    return '';
  };
  

  const validatePassword = (password) => {
    if (!password) return 'Password is required.';
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      return 'Password: 6+ characters, include a number & symbol.';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field
    let error = '';
    switch (name) {
      case 'FirstName':
        error = validateFirstName(value);
        break;
      case 'LastName':
        error = validateLastName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'pswd':
        error = validatePassword(value);
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {
      FirstName: validateFirstName(formData.FirstName),
      LastName: validateLastName(formData.LastName),
      email: validateEmail(formData.email),
      pswd: validatePassword(formData.pswd),
    };
    setErrors(newErrors);
    // Check if there are any errors
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the entire form before submitting
    if (!validateForm()) {
      // alert('Please fix the errors in the form before submitting.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5002/api/createaccount', formData);
      alert(response.data.message);
    } catch (error) {
      alert('Error creating account: ' + (error.response?.data?.message || 'Unexpected error occurred.'));
    }
  };

  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        margin: 0 
      }}>
      <form 
        onSubmit={handleSubmit}
        style={{ 
          width: '100%', 
          maxWidth: '400px', 
          padding: 0, 
          boxShadow: 'none', 
          background: 'none', 
          border: 'none' 
        }}>
        <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '20px' ,
            fontSize: '1.7rem',
            paddingBottom: '30px'
          }}>Login</h2>

        <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '20px' ,
            fontSize: '1.5rem',
            fontWeight: 'normal'
          }}>Create Account</h2>

        <div style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
          <label htmlFor="FirstName" style={{ display: 'block', textAlign: 'left', fontSize: '1.09rem', fontFamily: '"Times New Roman", Times, serif' }}>
            First Name
          </label>
          <input 
            type="text" 
            className="form-control form-control-lg" 
            id="FirstName" 
            name="FirstName" 
            value={formData.FirstName} 
            onChange={handleChange} 
            style={{ height: '50px', width: '100%', padding: '10px 15px', fontSize: '1rem', backgroundColor: 'rgba(212, 207, 207, 0.3)', border: 'none', borderRadius: '0' }} 
          />
          {errors.FirstName && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '10px' }}>{errors.FirstName}</p>}
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="LastName" style={{ display: 'block', textAlign: 'left', fontSize: '1.09rem', fontFamily: '"Times New Roman", Times, serif' }}>
            Last Name
          </label>
          <input 
            type="text" 
            className="form-control form-control-lg" 
            id="LastName" 
            name="LastName" 
            value={formData.LastName} 
            onChange={handleChange} 
            style={{ height: '50px', width: '100%', padding: '10px 15px', fontSize: '1rem', backgroundColor: 'rgba(212, 207, 207, 0.3)', border: 'none', borderRadius: '0' }} 
          />
          {errors.LastName && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '10px' }}>{errors.LastName}</p>}
        </div>

        <div style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', textAlign: 'left', fontSize: '1.09rem', fontFamily: '"Times New Roman", Times, serif' }}>
            Email
          </label>
          <input 
            type="email" 
            className="form-control form-control-lg" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            style={{ height: '50px', width: '100%', padding: '10px 15px', fontSize: '1rem', backgroundColor: 'rgba(212, 207, 207, 0.3)', border: 'none', borderRadius: '0' }} 
          />
          {errors.email && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '10px' }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="pswd" style={{ display: 'block', textAlign: 'left', fontSize: '1.09rem', fontFamily: '"Times New Roman", Times, serif' }}>
            Password
          </label>
          <input 
            type="password" 
            className="form-control form-control-lg" 
            id="pswd" 
            name="pswd" 
            value={formData.pswd} 
            onChange={handleChange} 
            style={{ height: '50px', width: '100%', padding: '10px 15px', fontSize: '1rem', backgroundColor: 'rgba(212, 207, 207, 0.3)', border: 'none', borderRadius: '0' }} 
          />
          {errors.pswd && <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '10px' }}>{errors.pswd}</p>}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
          <Button 
            type="submit" 
            style={{ width: '100px', height: '50px', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#c8a59d', color: 'white', border: 'none', borderRadius: '0', fontWeight: 'bold' }}>
            CREATE
          </Button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Link to='/Login'>
            <Button 
              variant="link" 
              style={{ fontSize: '0.9rem', padding: '0', marginTop: '0', color: '#747272' }}>
              Already have an account? Login here
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Createaccount;

