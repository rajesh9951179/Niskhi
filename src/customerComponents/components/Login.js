import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { auth, googleProvider, signInWithPopup } from './firebase'; 
import googleLogo from  '../images/Googlelogo.jpg';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    onLogin();
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      
      navigate('/home');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent:  'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0
    }}>
      <form style={{
        width: '100%',
        maxWidth: '400px',
        padding: 0,
        boxShadow: 'none',
        background: 'none',
        border: 'none'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
          paddingBottom: '50px'
        }}>Login</h2>

        <div style={{
          marginBottom: '1.5rem',
          marginTop: '1rem'
        }}>
          <label htmlFor="email" style={{
            height: '30px',
            width: '50px',
            display: 'block',
            textAlign: 'left',
            fontSize: '1.09rem',
            fontFamily: '"Times New Roman", Times, serif'
          }}>Email</label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            style={{
              height: '50px',
              width: '100%',
              padding: '10px 15px',
              fontSize: '1rem',
              backgroundColor: 'rgba(212, 207, 207, 0.3)',
              border: 'none',
              borderRadius: '0'
            }}
          />
        </div>

        <div style={{
          marginBottom: '1.5rem'
        }}>
          <label htmlFor="pwd" style={{
            display: 'block',
            textAlign: 'left',
            fontSize: '1.09rem',
            fontFamily: '"Times New Roman", Times, serif'
          }}>Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            id="pwd"
            name="pswd"
            value={password}
            onChange={handlePasswordChange}
            style={{
              height: '50px',
              width: '100%',
              padding: '10px 15px',
              fontSize: '1rem',
              backgroundColor: 'rgba(212, 207, 207, 0.3)',
              border: 'none',
              borderRadius: '0'
            }}
          />
        </div>

        <div style={{
          marginBottom: '30px',
          marginTop: '-0.5rem',
          display: 'flex',
          justifyContent: 'flex-start',
          fontFamily: '"Times New Roman", Times, serif'
        }}>
          <a href="/forgot-password" style={{
            textAlign: 'left',
            textDecoration: 'none',
            color: 'black'
          }}>Forgot your password?</a>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: '1rem'
        }}>
          <Button
            style={{
              width: '100px',
              height: '50px',
              fontSize: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#c8a59d',
              color: 'white',
              border: 'none',
              marginRight: '0.25rem',
              borderRadius: '0',
              fontFamily: '"Times New Roman", Times, serif'
            }}
            onClick={handleSignIn}
          >
            SIGN IN
          </Button>
          <br />
          <Link to="/Createaccount">
            <Button
              style={{
                width: '200px',
                height: '50px',
                fontSize: '1rem',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#c8a59d',
                color: 'white',
                border: 'none',
                borderRadius: '0',
                marginLeft: '10px',
                fontFamily: '"Times New Roman", Times, serif'
              }}
            >
              CREATE ACCOUNT
            </Button>
          </Link>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px'
        }}>
         <Button
            style={{
             width: '100%',
             height: '50px',
             fontSize: '1rem',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             backgroundColor: '#ffffff', 
             color: '#4285F4', 
             border: '1px solid #4285F4', 
             borderRadius: '4px', 
             fontFamily: '"Roboto", sans-serif', 
             boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
             textTransform: 'none', 
             cursor: 'pointer',
             padding: '0 16px', 
             fontWeight: '500', 
             transition: 'background-color 0.3s, color 0.3s', 
              '&:hover': {
             backgroundColor: '#f1f3f4', 
             color: '#4285F4', 
           }
         }}
         onClick={handleGoogleSignIn}
    >
      <img
         src={googleLogo} 
        alt="Google logo"
        style={{ width: '44px', height: '44px', marginRight: '4px' }} 
      />
      Sign in with Google
      </Button>
       
        </div>
      </form>
    </div>
  );
}

export default Login;
