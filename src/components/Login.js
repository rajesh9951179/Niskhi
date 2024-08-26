import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        margin: 0 
      }}>
      <form action="/action_page.php" style={{ 
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
              fontSize: '1.09rem' ,
              fontFamily: '"Times New Roman", Times, serif'
            }}>Email</label>
          <input 
            type="email" 
            className="form-control form-control-lg" 
            id="email" 
            name="email" 
            style={{ 
              height: '50px', 
              width: '100%', 
              padding: '10px 15px', 
              fontSize: '1rem', 
              backgroundColor: 'rgba(212, 207, 207, 0.3)', 
              border: 'none' ,

            borderRadius: '0',
        
        
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
            style={{ 
              height: '50px', 
              width: '100%', 
              padding: '10px 15px', 
              fontSize: '1rem', 
              backgroundColor: 'rgba(212, 207, 207, 0.3)', 
              border: 'none' ,
              borderRadius: '0',
              
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
            marginBottom: '1rem',
            
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
            
            }}>
            SIGN IN
          </Button>
          <br></br>
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
                marginLeft:'10px',
                fontFamily: '"Times New Roman", Times, serif'
              
              }}>
              CREATE ACCOUNT
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
