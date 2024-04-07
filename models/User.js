// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  role: { type: String, enum: ['teacher', 'parent'], required: true },
  passwordHash: String,
  //studioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Studio' }, // Only if we have a separate studio entity
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('User', userSchema);
