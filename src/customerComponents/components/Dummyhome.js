import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Dummyhome() {
  return (
    <div className="dummy-container">
      <h1 className="text-center">Welcome to the Dummy home Page</h1>
      <div className="button-group">
        <Link to="/Login">
          <Button className="btn btn-primary dummy-button">Go to Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Dummyhome;
