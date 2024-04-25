require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const exerciseHabitRoutes = require('./routes/exerciseHabitRoutes');
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.use('/users', userRoutes);
app.use('/habits', exerciseHabitRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
