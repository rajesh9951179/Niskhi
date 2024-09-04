import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Careers.css';

function Careers() {
  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center", fontFamily: "Futura",marginTop:"2rem" }}>WE ARE HIRING!</h2><br />
      <h5 style={{ display: "flex", justifyContent: "center", fontFamily: "Centaur" }}>Submit your CV and Portfolio at careers@baisegaba.com</h5><br></br>
      <Accordion className='accordian'>
        <Accordion.Item eventKey="0">
          <Accordion.Header className='item'>FASHION DESIGNER</Accordion.Header><hr/>
          <Accordion.Body className='para'>
            Looking for an experienced fashion designer with 2+ years of experience. Must be creative, trend savvy, and proficient in Adobe Suite.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className='item'>GRAPHICS DESIGNER</Accordion.Header><hr/>
          <Accordion.Body className='para'>
            Looking for a Graphic Designer with 2+ years of experience. Must be creative, detail-oriented, and proficient in Adobe Suite.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className='item'>SALES EXECUTIVE/FASHION CONSULTANT</Accordion.Header><hr/>
          <Accordion.Body className='para'>
            Looking for a sales executive with 2+ years of experience. Dynamic, results-driven, and excellent communication skills.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className='item'>PHOTOGRAPHER</Accordion.Header><hr/>
          <Accordion.Body className='para'>
            Freelancer photographer with 2+ years of experience. Creative, adaptable, and skilled in various photography genres.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <form className="application-form">
        <h3 className="form-title">Complete the form to apply at Baise Gaba</h3>
        <input type="text" placeholder="First name" />
        <input type="email" placeholder="Email" />
        <div className="phone-input">
          <select>
            <option value="+91">🇮🇳 +91</option>
          </select>
          <input type="tel" placeholder="Phone" />
        </div>
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Current Designation" />
        <input type="text" placeholder="Current Company" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Careers;
