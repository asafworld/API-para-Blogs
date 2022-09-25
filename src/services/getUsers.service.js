const { User } = require('../models/index');

const getUsersService = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });
  if (users) {
    return {
      success: true,
      users,
    };
  }
  return {
    success: false,
    message: 'No user registered',
  };
};

module.exports = getUsersService;