const { User } = require('../models/index');

const getUserByIdService = async (id) => {
  const getUser = await User.findByPk(id);
  if (getUser) {
    const { displayName, email, image } = getUser.dataValues;
    return {
      success: true,
      user: { id, displayName, email, image },
    };
  }
  return {
    success: false,
    message: 'User does not exist',
  };
};

module.exports = getUserByIdService;