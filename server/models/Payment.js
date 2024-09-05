const mongoose = require('mongoose');


const payment = new mongoose.Schema({
  email: { type: String, required: true },
  country: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  apartment: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: String, required: true },
  phone: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  billingAddress: {
    sameAsShipping: { type: Boolean, required: true },
    country: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    apartment: { type: String },
    city: { type: String },
    state: { type: String },
    pinCode: { type: String },
    phone: { type: String },
  },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model('PaymentDetails', payment);

module.exports = Payment;