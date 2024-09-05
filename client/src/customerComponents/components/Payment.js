import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/img1.jpg'; 
import img2 from '../images/img2.jpg'; 
import img3 from '../images/img3.jpg'; 
import img4 from '../images/img4.jpg'; 
import axios from 'axios';

function Payment() {
    
    const [formData, setFormData] = useState({
        email: '',
        country: 'India',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        state: 'Telangana',
        pinCode: '',
        phone: '',
        paymentMethod: 'razorpay',
        billingAddress: {
            sameAsShipping: true,
            country: '',
            firstName: '',
            lastName: '',
            address: '',
            apartment: '',
            city: '',
            state: '',
            pinCode: '',
            phone: '',
        },
        amount: 15800, 
    });

    const [showBillingAddress, setShowBillingAddress] = useState(false);
    const [message, setMessage] = useState('');


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleBillingAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            billingAddress: {
                ...formData.billingAddress,
                [name]: value,
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/payment', formData);
            setMessage(response.data.message);           
        } catch (error) {
            console.error('Error submitting payment details:', error);
            setMessage('Error submitting payment details. Please try again.'); 
        }
    };
    return (
        
        <div className="container mt-5">
            {message && <div className="alert alert-info">{message}</div>}

            <div className="row">
                <div className="col-md-7">
                    <div className="d-flex justify-content-between">
                        <h4>Contact</h4>
                        <a href="#" className="text-end">Login</a>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                            <input 
                              type="email" 
                              name="email"
                              placeholder="Email" 
                              className="form-control" 
                              value={formData.email}
                              onChange={handleChange}
                              required
                             />
                        </div>
                        <div className="form-check mt-2">
                            <input 
                            type="checkbox" 
                            className="form-check-input" 
                            name="emailOffers"
                            id="emailOffers"
                            checked={formData.emailOffers || false}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="emailOffers">
                                Email me with news and offers
                            </label>
                        </div>

                        <h4 className="mt-3">Delivery</h4>
                        <div className="form-group">
                            <label>Country</label>
                            <select 
                             name="country"
                             className="form-control"
                             value={formData.country}
                             onChange={handleChange}>
                                <option>India</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    name="firstName"
                                        placeholder="First name"
                                        className="form-control"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                         />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                      type="text"
                                      name="lastName"
                                      placeholder="Last name"
                                      className="form-control"
                                      value={formData.lastName}
                                      onChange={handleChange}
                                      required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input 
                           type="text"
                           name="address"
                           placeholder="Address"
                           className="form-control"
                           value={formData.address}
                           onChange={handleChange}
                           required
                            />
                        </div>
                        <div className="form-group">
                            <input 
                             type="text"
                             name="apartment"
                             placeholder="Apartment, suite, etc. (optional)"
                             className="form-control"
                             value={formData.apartment}
                             onChange={handleChange}
                             />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input 
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="form-control"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                     />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <input 
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    className="form-control"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                     />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <input 
                                    type="text"
                                    name="pinCode"
                                    placeholder="PIN code"
                                    className="form-control"
                                    value={formData.pinCode}
                                    onChange={handleChange}
                                    required
                                     />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                             />
                        </div>
                        <div className="form-check mt-3 mb-4">
                            <input 
                             type="checkbox"
                             name="saveInfo"
                             className="form-check-input"
                             id="saveInfo"
                             checked={formData.saveInfo || false}
                             onChange={handleChange} 
                            />
                            <label className="form-check-label" htmlFor="saveInfo">
                                Save this information for next time
                            </label>
                        </div>

                        <div className="container mt-5">
                            <h4>Payment</h4>
                            <p>All transactions are secure and encrypted.</p>
                            <div className="card border-primary mb-3">
                                <div className="card-body">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="paymentMethod"
                                            id="razorpay"
                                            value="razorpay"
                                            checked={formData.paymentMethod === 'razorpay'}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="razorpay">
                                            Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                                        </label>
                                        <div className="float-end">
                                            <img 
                                                src={img1}
                                                alt="UPI"
                                                style={{ height: "30px" }}
                                            />
                                            <img 
                                                src={img2}
                                                alt="VISA"
                                                style={{ height: "10px" }}
                                            />
                                            <img 
                                                src={img3}
                                                alt="MASTER CARD"
                                                style={{ height: "13px" }}
                                            />
                                            <img 
                                                src={img4}
                                                alt="Other Card"
                                                style={{ height: "25px" }}
                                            />
                                            <span className="badge bg-secondary ms-2">+16</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <img
                                             src="https://via.placeholder.com/150x100?text=Payment+Gateway+Image"
                                            alt="Payment Gateway"
                                            className="img-fluid"
                                        />
                                        <p className="mt-3">
                                            After clicking "Pay now", you will be redirected to Razorpay
                                            Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase
                                            securely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-check">
                                <input
                                     className="form-check-input"
                                     type="radio"
                                     name="paymentMethod"
                                     id="cod"
                                     value="cod"
                                     checked={formData.paymentMethod === 'cod'}
                                     onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="cod">
                                    Cash on Delivery (COD)
                                </label>
                            </div>
                        </div>

                        <h4>Billing Address</h4>
                        <div className="form-check mb-4">
                            <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="billingAddress"
                                    id="sameAsShipping"
                                    checked={formData.billingAddress.sameAsShipping}
                                    onClick={() => setShowBillingAddress(false)}

                                    onChange={(e) => {
                                        setShowBillingAddress(!e.target.checked);
                                        handleChange(e);
                                    }}
                            />
                            <label className="form-check-label" htmlFor="sameAsShipping">
                                Same as shipping address
                            </label>
                        </div>
                        <div className="form-check mb-4">
                            <input

                                   type="text"
                                   placeholder="Billing Country"
                                   className="form-control"
                                   value={formData.billingAddress.country}
                                   onChange={handleBillingAddressChange}
                                id="differentBilling"
                                name="billingAddress"
                                onClick={() => setShowBillingAddress(true)}
                            />
                            <label className="form-check-label" htmlFor="differentBilling">
                                Use a different billing address
                            </label>
                        </div>
                        
                    </form>
                        

                    {showBillingAddress && (
                        <div className="billing-address bg-light p-3">
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">Country/Region</label>
                                <select className="form-select" id="country">
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                </select>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input 
                                    type="text"
                                                name="billingAddress.firstName"
                                                placeholder="Billing First name"
                                                className="form-control"
                                                value={formData.billingAddress.firstName}
                                                onChange={handleBillingAddressChange}
                                                 />
                                </div>
                                <div className="col-md-6">
                                    <input 
                                    type="text"
                                                name="billingAddress.lastName"
                                                placeholder="Billing Last name"
                                                className="form-control"
                                                value={formData.billingAddress.lastName}
                                                onChange={handleBillingAddressChange}
                                                 />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input 
                                type="text" 
                                className="form-control" 
                                id="address" 
                                placeholder="Address"
                                name="billingAddress.address"
                                value={formData.billingAddress.address}
                                onChange={handleBillingAddressChange} />
                            </div>
                            <div className="mb-3">
                                <input 
                                type="text"
                                name="billingAddress.apartment"
                                placeholder="Billing Apartment, suite, etc. (optional)"
                                className="form-control"
                                value={formData.billingAddress.apartment}
                                onChange={handleBillingAddressChange}
                                 />
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="city" 
                                    placeholder="City"
                                    name="billingAddress.city"
                                    value={formData.billingAddress.city}
                                    onChange={handleBillingAddressChange}
                                     />
                                </div>
                                <div className="col-md-3">
                                    <select 
                                    className="form-select" 
                                    id="state"
                                    type="text"
                                    name="billingAddress.state"
                                    placeholder="Billing State"
                                    value={formData.billingAddress.state}
                                    onChange={handleBillingAddressChange}
                                    >
                                        <option value="Telangana">Telangana</option>
                                        <option value="Karnataka">Karnataka</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="zip" 
                                    name="billingAddress.pinCode"
                                    placeholder="Billing PIN code"
                                    value={formData.billingAddress.pinCode}
                                    onChange={handleBillingAddressChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input 
                                type="tel" 
                                className="form-control" 
                                id="phone" 
                                name="billingAddress.phone"
                                placeholder="Billing Phone"
                                value={formData.billingAddress.phone}
                                onChange={handleBillingAddressChange}/>
                            </div>
                        </div>
                    
                    )}

                    <button
                     type="submit" 
                     className="btn btn-primary w-100">Pay now</button>
                </div>

                <div className="col-md-5">
                    <div className="card border-0">
                        <div className="card-body">
                            <h5 className="card-title">SITA ANARKALI SET</h5>
                            <p className="card-text">XXS / SITA ANARKALI SET</p>
                            <h5>₹15,800.00</h5>
                            <div className="form-group mt-2">
                                <label>Discount code or gift card</label>
                                <div className="input-group mb-4">
                                    <input 
                                    type="text" 
                                    className="form-control mt-3" />
                                    <button className="btn btn-outline-secondary mt-3" type="button">Apply</button>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal</span>
                                <span>₹15,800.00</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Shipping</span>
                                <span>Enter shipping address</span>
                            </div>

                            <div className="d-flex justify-content-between mt-2">
                                <h2>Total</h2>
                                <h2>₹15,800.00</h2>
                            </div>
                            <p className="text-muted mt-0">Including ₹0.00 in taxes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
