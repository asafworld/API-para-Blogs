require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (email) => {
  try {
    const token = jwt.sign({ data: { email } }, secret, jwtConfig);
    return token;
  } catch (err) {
    return err;
  }
};

module.exports = generateToken;