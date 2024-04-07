// models/Students.js
const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  date: Date,
  description: String,
  attachments: [String] // array of links to recordings or documents
});

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  level: String,
  parentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  progress: [progressSchema], // Embedded sub-document array
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }]
});

module.exports = mongoose.model('Student', studentSchema);
