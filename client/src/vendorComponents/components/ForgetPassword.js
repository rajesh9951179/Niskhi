import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ForgetPassword() {
  const [validated, setValidated] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log('Phone Number:', phoneNumber);
      setStep(2);
    }

    setValidated(true);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log('OTP:', otp);
      alert('OTP verified successfully');
      navigate('/setpassword'); // Adjust path if necessary
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
            Forgot Password
          </h1>

          {step === 1 && (
            <Form noValidate validated={validated} onSubmit={handlePhoneSubmit}>
              <Form.Group className="mb-3" controlId="formGridPhoneNumber">
                <Form.Label><strong>Phone Number</strong></Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="\d{10}"
                  title="Phone number must be exactly 10 digits"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid 10-digit phone number.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="success" type="submit" className="mt-3 w-100">
                Request OTP
              </Button>
            </Form>
          )}

          {step === 2 && (
            <Form noValidate validated={validated} onSubmit={handleOtpSubmit}>
              <Form.Group className="mb-3" controlId="formGridOtp">
                <Form.Label><strong>OTP</strong></Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide the OTP.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="success" type="submit" className="mt-3 w-100">
                Verify OTP
              </Button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}
