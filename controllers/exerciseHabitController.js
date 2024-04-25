const ExerciseHabit = require('../models/exerciseHabit');

exports.addExerciseHabit = async (req, res) => {
  try {
    const { userId, exerciseLevel } = req.body;
    const newHabit = await ExerciseHabit.create({ userId, exerciseLevel });
    res.status(201).send(newHabit);
  } catch (error) {
    res.status(400).send(error);
  }
};
