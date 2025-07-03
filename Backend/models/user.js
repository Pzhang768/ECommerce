const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  lastLogin: {
    type: Date,
    default: NaN
  },
  dateRegistered: {
    type: Date,
    default: new Date()
  },
  listings: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Listing'
  },
  reviews: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Review'
  }
})

module.exports = mongoose.model('User', userSchema);