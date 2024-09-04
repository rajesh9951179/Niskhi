import React from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';

const OrderTracking = () => {
  return (
    <Container 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        minHeight: '100vh',
        paddingTop: '40px', 
        backgroundColor: '#f8f9fa',
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '500px',
          width: '100%'
        }}
      >
        <Form>
          <InputGroup>
            <Form.Control 
              type="text" 
              placeholder="Enter the Order / Tracking Number" 
              aria-label="Order / Tracking Number"
            />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
        </Form>
      </div>
    </Container>
  );
};

export default OrderTracking;
