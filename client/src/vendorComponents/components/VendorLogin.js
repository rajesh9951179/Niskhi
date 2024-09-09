import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function VendorLogin() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
      navigate('/dashboard'); // Navigate to Dashboard on successful login
    }

    setValidated(true);
  };

  const handleForgotPassword = () => {
    navigate('/forgetpassword');
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#e9f5f2', minHeight: '80vh' }}>
      <Row className="justify-content-center align-items-center m-0 h-100">
        <Col md={6} className="p-4">
          <h1 className='mb-4' style={{
            marginBottom: '30px',
            backgroundColor: '#0d4523',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            textAlign: 'center',
          }}>
            Login
          </h1>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label><strong>Email</strong></Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridPassword">
              <Form.Label><strong>Password</strong></Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your password.
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex flex-column align-items-center">
              <Button variant="success" type="submit" className="mt-3">
                Login
              </Button>
              <Button
                variant="link"
                className="mt-3"
                style={{ color: '#0d4523', textDecoration: 'none' }}
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
