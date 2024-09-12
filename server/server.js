
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = express();
const saltRounds = 10;

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:root@customer-db.w1e29.mongodb.net/', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 })
   .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error:', error));
  app.post('/api/register', async (req, res) => {
    const { FirstName, LastName, email, password } = req.body;
  
    console.log('Received data:', req.body); 
    if (!FirstName || !LastName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    if (!/^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
  
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = new User({ FirstName, LastName, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });

const User = require('./models/User');
const Payment = require('./models/Payment');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://root:root@customer-db.8vr1u.mongodb.net/Customer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Connection error', error);
  });

mongoose.set('debug', true); // Optional: Debug MongoDB queries

// Create Account
app.post('/api/createaccount', async (req, res) => {
  try {
    const { FirstName, LastName, email, password } = req.body;

    // Validate if all fields are present
    if (!FirstName || !LastName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new user object
    const user = new User({
      FirstName,
      LastName,
      email,
      password
    });

    // Save the user to the database
    await user.save();

    // Respond with success message
    res.status(201).json({ message: 'Account created successfully' });
  } catch (error) {
    console.error('Error in create account:', error);

    // Respond with a detailed error message
    res.status(500).json({
      message: 'Internal server error',
      error: error.message || error
    });
  }
});

// Fetch Latest Created Account
app.get('/createaccountFromDB', async (req, res) => {
  try {
    const latestUser = await User.findOne().sort({ createdAt: -1 });
    res.json(latestUser);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

// Delete User
app.delete('/deleteUser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Logout
app.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
});

// Payment Route
app.post('/api/payment', async (req, res) => {
  try {
    const paymentDetails = req.body;
    const payment = new Payment(paymentDetails);
    await payment.save();
    res.status(201).json({ message: 'Payment details saved successfully' });
  } catch (error) {
    console.error('Error saving payment details:', error);
    res.status(500).json({ message: 'Failed to save payment details' });
  }


  try {

// Login Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email

    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Error logging in', error });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});
