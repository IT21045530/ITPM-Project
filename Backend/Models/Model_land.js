const mongoose = require('mongoose');

const landSchema = new mongoose.Schema({
  perches: {
    type: Number,
    required: true,
  },
  soilNature: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  cultivationGood: {
    type: String,
    required: true,
  },
  minInvestment: {
    type: String,
    required: true,
  },
  landType: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  }
});

const Land = mongoose.model('Land', landSchema);
module.exports = Land;
