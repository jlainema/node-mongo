const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = Value = mongoose.model('value', schema);
