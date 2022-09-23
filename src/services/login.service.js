const model = require('../models/index');
const generateToken = require('../Helpers/createToken.helper');

const loginService = async ({ email, password }) => {
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
    return {
      success: false, message: 'Invalid fields',
    };
};

module.exports = loginService;