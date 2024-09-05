import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Cart.css'; 
import img1 from '../images/img1.jpeg'; 

const Cart = ({ show, onClose }) => {
  const [quantity, setQuantity] = useState(1); 
  const itemPrice = 6990.00; 
  const subtotal = itemPrice * quantity

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <Modal show={show} onHide={onClose} className="cart-modal">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cart-item">
          <img
            src={img1} // Replace with actual image path
            alt="DAKSH BANDI"
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h5 className="product-name">DAKSH BANDI</h5>
            <p className="product-category">Menswear</p>
            <p className="product-size">Size: XL</p>
            <p className="product-style">Style: DAKSH BANDI</p>
            <div className="quantity-control">
              <Button variant="outline-secondary" onClick={handleDecrement}>-</Button>
              <span className="quantity">{quantity}</span>
              <Button variant="outline-secondary" onClick={handleIncrement}>+</Button>
            </div>
          </div>
          <Button variant="link" className="remove-item">
            
          </Button>
        </div>
        <div className="cart-summary">
          <p className="subtotal">
            SUBTOTAL ({quantity} ITEM{quantity > 1 ? 'S' : ''}): <span className="price">Rs. {subtotal.toLocaleString()}</span>
          </p>
          <p className="total">
            Total: <span className="price">Rs. {subtotal.toLocaleString()}</span>
          </p>
          <p className="tax-shipping">Tax included. Shipping calculated at checkout.</p>
          <div className="terms-policy">
            <input type="checkbox" id="accept-terms" />
            <label htmlFor="accept-terms">
              I Accept All the <a href="/">Terms & Policies</a>
            </label>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="cart-footer">
      {/* <Link to="/Cart" className="btn-link"> */}
      <Button className="view-cart">
        VIEW CART
      </Button>
    {/* </Link> */}
        <Button className="checkout">
          CHECK OUT
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;