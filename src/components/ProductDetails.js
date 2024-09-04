import React, { useState } from 'react'; 
import { Row, Col, Button, Form, Modal, Table } from 'react-bootstrap';
import Cart from './Cart'; 


function ProductDetails() { 
  const [selectedSize, setSelectedSize] = useState('S'); 
  const [showChart, setShowChart] = useState(false); 
  const [showCart, setShowCart] = useState(false); // State to manage Cart visibility

  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL']; 

  const handleShowChart = () => setShowChart(true); 
  const handleCloseChart = () => setShowChart(false); 

  const handleAddToCart = () => setShowCart(true); // Show Cart when Add to Cart is clicked
  const handleCloseCart = () => setShowCart(false); // Close Cart when Close is clicked

  return (
    <div>
      <h2>DAKSH BANDI</h2> 
      <p>SKU: BGMLM03-J</p>
      <h4>Rs. 6,990.00</h4> 
      <p>Tax included. Shipping calculated at checkout.</p>
      
      <Form>
        <Form.Group as={Row} className="align-items-center">
          <Col sm="12" md="2" className="text-md-start">
            <Button 
              variant="link" 
              className="p-0 text-decoration-none" 
              onClick={handleShowChart}
            >
              <span role="img" aria-label="pencil">✏</span> SizeChart
            </Button>
          </Col>
          
          <Col sm="12" md="10">
            <div className="d-flex flex-wrap">
              {sizes.map((size, index) => (
                <Button
                  key={index}
                  variant={selectedSize === size ? 'dark' : 'outline-secondary'}
                  className="m-1"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </Col>
        </Form.Group>
      </Form>
      
      <Row className="mt-3">
        <Col sm="6">
          <Button variant="primary" className="w-100" onClick={handleAddToCart}>Add to Cart</Button> 
        </Col>
        <Col sm="6">
          <Button variant="primary" className="w-100">Buy it Now</Button>
        </Col>
      </Row>
      
      <Modal show={showChart} onHide={handleCloseChart}>
        <Modal.Header closeButton>
          <Modal.Title>Size Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SIZE</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
                <th>XXL</th>
                <th>3XL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CHEST</td>
                <td>91.4</td>
                <td>96.5</td>
                <td>102</td>
                <td>107</td>
                <td>112</td>
                <td>117</td>
              </tr>
              <tr>
                <td>SHOULDER</td>
                <td>44.5</td>
                <td>45.7</td>
                <td>47</td>
                <td>48.3</td>
                <td>49.5</td>
                <td>50.8</td>
              </tr>
              <tr>
                <td>ARMHOLE</td>
                <td>53.3</td>
                <td>55.9</td>
                <td>58.4</td>
                <td>61</td>
                <td>63.5</td>
                <td>66</td>
              </tr>
              <tr>
                <td>BICEP</td>
                <td>31.1</td>
                <td>33</td>
                <td>34.9</td>
                <td>36.8</td>
                <td>38.7</td>
                <td>40.6</td>
              </tr>
              <tr>
                <td>WRIST</td>
                <td>17.8</td>
                <td>19.1</td>
                <td>20.3</td>
                <td>21.6</td>
                <td>22.9</td>
                <td>24.1</td>
              </tr>
              <tr>
                <td>MID WAIST</td>
                <td>86.4</td>
                <td>91.4</td>
                <td>96.5</td>
                <td>102</td>
                <td>107</td>
                <td>112</td>
              </tr>
              <tr>
                <td>HIP</td>
                <td>96.5</td>
                <td>102</td>
                <td>107</td>
                <td>112</td>
                <td>117</td>
                <td>122</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseChart}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Conditionally render Cart component */}
      {showCart && <Cart show={showCart} onClose={handleCloseCart} />}
    </div>
  );
}

export default ProductDetails;