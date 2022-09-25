require('dotenv/config');
const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const checkToken = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (authorization === undefined || authorization === '') {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  try {
    const decoded = jwt.verify(authorization, secret);
    const check = await User.findOne({ where: { email: decoded.data.email } });
    if (!check) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = checkToken;