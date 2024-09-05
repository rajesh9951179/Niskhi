import React, { useState } from "react";
import "./ProductDetails.css";
import img1 from '../images/img1.jpeg'; 

const ProductDetails = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(""); 

  const addToCart = (product) => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const productWithSize = { ...product, size: selectedSize }; 

    const existingItem = cartItems.find(
      (item) => item.id === productWithSize.id && item.size === selectedSize
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productWithSize.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, productWithSize]);
    }
    setIsCartOpen(true); 
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleIncrement = (id, size) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (id, size) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const product = {
    id: 1,
    name: "Daksh Bandi",
    price: 6990,
    image: img1, 
    quantity: 1,
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="product-details">
      {/* Product Details Section */}
      <div className="product-info">
        {/* <img src={product.image} alt={product.name} className="product-image" /> */}
        <h2>{product.name}</h2>
        <p>Rs. {product.price}</p>

        <div className="size-selection">
          <span>Select Size:</span>
          {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
            <button
              key={size}
              className={selectedSize === size ? "active" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <button className="buy-now-btn">Buy it Now</button>
      </div>

      {/* Cart Sidebar */}
      <div className={`cart-container ${isCartOpen ? "show" : ""}`}>
        <div className="cart-content">
          <h3>Your Cart</h3>
          <button className="close-cart-button" onClick={closeCart}>
  <i className="fas fa-times" /> 
</button>

          {/* Loop through cartItems and render them */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.size}`}>
                <div className="cart-item-top"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                  style={{
                    width: '50%', 
                    height: '50%', 
                    borderRadius: 10, 
                    objectFit: 'contain'
                  }}
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Size: {item.size}</p>
                  <p>Price: Rs. {item.price}</p>

                  <div className="quantity-control">
                    <button onClick={() => handleDecrement(item.id, item.size)}>
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id, item.size)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}

          {/* Footer with total and checkout button */}
          <div className="cart-footer">
            <p>Total: Rs. {calculateTotal()}</p>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
