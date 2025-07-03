const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Listing'
  }
})

module.exports = mongoose.model('Wishlist', wishlistSchema)