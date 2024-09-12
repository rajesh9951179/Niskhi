
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 5000;
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
  }

  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

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
});
