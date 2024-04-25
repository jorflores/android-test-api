const mongoose = require('mongoose');

const exerciseHabitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  exerciseLevel: { type: Number, required: true }
});

module.exports = mongoose.model('ExerciseHabit', exerciseHabitSchema);
