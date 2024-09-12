import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import googleLogo from '../images/Googlelogo.jpg'; 
import { auth, googleProvider, signInWithPopup } from './firebase'; 

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignUp = async () => {
    navigate('/Home');

    if (!email || !password) {
      console.error('Email and password are required');
      
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/Login', { email, password });
      console.log('Response:', response);
      if (response.status === 200) {
        navigate('/Home');
      }
    } catch (error) {
      console.error('Error creating account:', error.response?.data?.message || error.message);
    }
  };
  
  

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Handle Google user here, maybe send to backend or navigate
      navigate('/Home');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <form style={{ width: '100%', maxWidth: '400px', padding: '0', boxShadow: 'none', background: 'none', border: 'none' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', paddingBottom: '50px' }}>Login</h2>
        <div style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
          <label htmlFor="email" style={{ height: '30px', display: 'block', textAlign: 'left', fontSize: '1.09rem', fontFamily: '"Times New Roman", Times, serif' }}>Email</label>
          <input type="email" className="form-control form-control-lg" id="email" value={email} onChange={handleEmailChange} style={{ height: '50px', width: '100%', padding: '10px 15px', fontSize: '1rem', backgroundColor: 'rgba(212, 207, 207, 0.3)', border: 'none', borderRadius: '0' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="password" style={{ display: 'block', textAlign: 'left', fontSize: '1.09rem', fontFamily: '"Times New Roman", Times, serif' }}>Password</label>
          <input type="password" className="form-control form-control-lg" id="password" value={password} onChange={handlePasswordChange} style={{ height: '50px', width: '100%', padding: '10px 15px', fontSize: '1rem', backgroundColor: 'rgba(212, 207, 207, 0.3)', border: 'none', borderRadius: '0' }} />
        </div>
        <div style={{ marginBottom: '30px', marginTop: '-0.5rem', display: 'flex', justifyContent: 'flex-start', fontFamily: '"Times New Roman", Times, serif' }}>
          <a href="/forgot-password" style={{ textAlign: 'left', textDecoration: 'none', color: 'black' }}>Forgot your password?</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1rem' }}>
          <Button style={{ width: '100px', height: '50px', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#c8a59d', color: 'white', border: 'none', marginRight: '0.25rem', borderRadius: '0', fontFamily: '"Times New Roman", Times, serif' }} onClick={handleSignUp}>
            SIGN IN
          </Button>
          <Link to="/Createaccount">
            <Button style={{ width: '200px', height: '50px', fontSize: '1rem', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#c8a59d', color: 'white', border: 'none', borderRadius: '0', marginLeft: '10px', fontFamily: '"Times New Roman", Times, serif' }}>
              CREATE ACCOUNT
            </Button>
          </Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleGoogleSignIn} style={{ height: '50px', fontSize: '1rem', backgroundColor: '#FFFFFF', color: 'black', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '0', display: 'flex', alignItems: 'center', padding: '0.5rem 1rem' }}>
            <img src={googleLogo} alt="Google Logo" style={{ width: '25px', height: '25px', marginRight: '0.5rem' }} />
            CONTINUE WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
