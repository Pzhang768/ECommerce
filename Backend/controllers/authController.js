const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 
require('dotenv').config();

// User Sign-In
exports.signIn = async (req, res) => {
  const { inputEmail, inputPassword } = req.body;

  try {
    const loginUser = await User.findOne({ email: inputEmail });
    
    if (!loginUser) {
      return res.status(404).json({ message: `No user found with email: ${inputEmail}` });
    }

    if (loginUser.role === 'admin') {
      return res.status(403).json({ message: 'Admins must login through the admin portal' });
    }

    const passwordMatch = await bcrypt.compare(inputPassword, loginUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Password is incorrect' });
    }

    const token = jwt.sign(
      { firstname: loginUser.firstname, lastname: loginUser.lastname, userId: loginUser._id, email: loginUser.email, role: loginUser.role },
      process.env.JWT_SECRET
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict'
    });

    loginUser.lastlogin = new Date();
    await loginUser.save();

    res.status(200).json({ message: 'Login successful', email: loginUser.email });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};