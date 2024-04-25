const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const newUser = await User.create({ phone, password });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { phone, password } = req.body;
    console.log(phone)
    console.log(password)
    const user = await User.findOne({ phone });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ message: 'Authentication failed' });
    }
    res.send({ message: 'Login successful' });
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

