const model = require('../models/index');
const generateToken = require('../Helpers/createToken.helper');

const loginService = async ({ email, password }) => {
  try {
    const login = await model.User.findOne({
      where: {
        email, password,
      },
    });
    if (login) {
      const token = generateToken(email);
      return {
        success: true, token,
      };
    }
    throw new Error();
  } catch (err) {
    return {
      success: false, systemMessage: err.message, message: 'Invalid fields',
    };
  } 
};

module.exports = loginService;