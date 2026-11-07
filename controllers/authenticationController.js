const User = require('../models/userModel');

// Create User
async function createUser(req, res) {
  const { name, email, password } = req.body;

  const errors = {};

  if (!name) errors.name = `Name required`;
  if (!email) errors.email = `Email required`;
  if (!password) errors.password = `Password required`;

  if (errors.name || errors.email || errors.password)
    return res.status(200).json(errors);

  const existingEmail = await User.findOne({ email: email });
  if (existingEmail)
    return res.status(400).json({
      message: `User with the email ${existingEmail.email} already exists! Try signing in?`,
    });

  const createUser = new User({
    name: name,
    email: email,
    password: password,
  });

  createUser.save();

  res.status(200).json({ message: `User has successfully been registered!` });
}
