// models/Lessons.js
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  duration: { type: Number, required: true }, // in minutes
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  notes: String,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Lesson', lessonSchema);
