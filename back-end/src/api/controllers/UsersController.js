const usersService = require('../services/UsersService');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await usersService.login(email, password);
    return res.status(200).json(user);
  };

module.exports = {
  login,
};