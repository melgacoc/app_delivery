const md5 = require('md5');
const { User } = require('../../database/models');

const validateEncryption = (password, passwordDb) => {
  if (password !== passwordDb) {
    const error = new Error('Invalid email or password');
    error.name = 'UNAUTHORIZED';
    throw error;
  }
};

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email },
  });

  if (user) {
    validateEncryption(md5(password), user.password);
  }

  return user;
};

const register = async (name, email, password) => {
  const passwordEncrypted = md5(password);
  await User.create({
    name,
    email,
    password: passwordEncrypted,
  });
};

module.exports = {
  login,
  register,
};