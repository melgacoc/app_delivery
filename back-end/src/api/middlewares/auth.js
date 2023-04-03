const jwt = require('jsonwebtoken');
const fs = require('fs-extra');

const secret = fs.readFileSync('jwt.evaluation.key');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, secret);
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};