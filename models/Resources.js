// models/Resources.js
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  type: { type: String, required: true, enum: ['metronome', 'tuner', 'sheet music', 'other'] },
  link: { type: String, required: true },
  description: String
});

module.exports = mongoose.model('Resource', resourceSchema);
