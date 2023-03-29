const usersService = require('../services/UsersService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await usersService.login(email, password);
  if (!user) return res.status(404).json({ message: 'Not Found' }); 
  return res.status(200).json(user);
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  await usersService.register(name, email, password);
  return res.status(201).json({});
};

module.exports = {
  login,
  register,
};