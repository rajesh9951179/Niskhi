import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SetPassword() {
  const [validated, setValidated] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      // Handle new password submission logic here
      console.log('New Password:', newPassword);
      alert('Password updated successfully');
      navigate('/login'); // Redirect to the login page or another page
    }

    setValidated(true);
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: '#e9f5f2', minHeight: '100vh' }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h1 className='mb-4' style={{
            marginBottom: '30px',
            backgroundColor: '#0d4523',
            padding: '10px',
            borderRadius: '10px',
            color: 'white',
            textAlign: 'center',
          }}>
            Set New Password
          </h1>

          <Form noValidate validated={validated} onSubmit={handlePasswordSubmit}>
            <Form.Group className="mb-3" controlId="formGridNewPassword">
              <Form.Label><strong>New Password</strong></Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a new password.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridConfirmPassword">
              <Form.Label><strong>Confirm Password</strong></Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Re-enter new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please confirm your new password.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="success" type="submit" className="mt-3 w-100">
              Set Password
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}