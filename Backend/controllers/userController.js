const User = require('../models/user'); 
const Listing = require('../models/listing');
const Wishlist = require('../models/wishlist');

exports.getUserInfo = async (req, res) => {
  try {
    const userId = req.user.userId;
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    //console.log('fetch completed')
    return res.status(200).json({
      id: currentUser._id, // Use _id instead of id as Mongoose adds _id by default
      email: currentUser.email,
      firstname: currentUser.firstname,
      lastname: currentUser.lastname,
      role: currentUser.role
    });

  } catch (err) {
    return res.status(500).json({ message: 'Failed to retrieve user data', error: err.message });
  }
};

