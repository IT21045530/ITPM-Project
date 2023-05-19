const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  capital: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cultivation: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  telephoneNumber: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  timeStamp: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    default: 1
  },
  photo: {
    type: String,
    required: true,
  }
});

const Investor = mongoose.model('Investor', investorSchema);

module.exports = Investor;
