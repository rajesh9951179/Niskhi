import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Createaccount() {
  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        margin: 0 
      }}>
      <form 
        action="/action_page.php" 
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
            fontSize:'1.7rem',
            paddingBottom:'30px'
          }}>Login</h2>

        <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '20px' ,
            fontSize:'1.5rem',
            fontWeight: 'normal'
          }}>Create Account</h2>

        <div style={{ 
            marginBottom: '1.5rem', 
            marginTop: '1rem' 
          }}>
          <label 
            htmlFor="FirstName" 
            style={{ 
              display: 'block', 
              textAlign: 'left', 
              fontSize: '1.09rem' ,
               fontFamily: '"Times New Roman", Times, serif',
            }}>
            First Name
          </label>
          <input 
            type="text" 
            className="form-control form-control-lg" 
            id="FirstName" 
            placeholder="" 
            name="FirstName" 
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
          <label 
            htmlFor="LastName" 
            style={{ 
              display: 'block', 
              textAlign: 'left', 
              fontSize: '1.09rem',
              fontFamily: '"Times New Roman", Times, serif' 
            }}>
            Last Name
          </label>
          <input 
            type="text" 
            className="form-control form-control-lg" 
            id="LastName" 
            placeholder="" 
            name="LastName" 
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
            marginBottom: '1.5rem', 
            marginTop: '1rem' 
          }}>
          <label 
            htmlFor="email" 
            style={{ 
              display: 'block', 
              textAlign: 'left', 
              fontSize: '1.09rem' ,
               fontFamily: '"Times New Roman", Times, serif'
            }}>
            Email
          </label>
          <input 
            type="email" 
            className="form-control form-control-lg" 
            id="email" 
            placeholder="" 
            name="email" 
            style={{ 
              height: '50px', 
              width: '100%', 
              padding: '10px 15px', 
              fontSize: '1rem', 
              backgroundColor: 'rgba(212, 207, 207, 0.3)', 
              border: 'none' ,
              borderRadius: '0'
            }} 
          />
        </div>

        <div style={{ 
            marginBottom: '1.5rem' 
          }}>
          <label 
            htmlFor="pwd" 
            style={{ 
              display: 'block', 
              textAlign: 'left', 
              fontSize: '1.09rem' ,
               fontFamily: '"Times New Roman", Times, serif'
            }}>
            Password
          </label>
          <input 
            type="password" 
            className="form-control form-control-lg" 
            id="pwd" 
            placeholder="" 
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
            display: 'flex', 
            justifyContent: 'flex-start', 
            marginBottom: '20px' 
          }}>
          <Link 
            to="/Login" 
            style={{ 
              textDecoration: 'none', 
              marginRight: '0.25rem' 
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
                border: 'none' ,
                borderRadius: '0',
                 fontFamily: '"Times New Roman", Times, serif'
              }}>
              CREATE
            </Button>
          </Link>
          <Link
            to="/Login"
            style={{
              textDecoration: 'none',
              marginLeft: '0.25rem'
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
              border: 'none' ,
              borderRadius: '0',
               fontFamily: '"Times New Roman", Times, serif'
            }}>
            CANCEL
          </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Createaccount;
