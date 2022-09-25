const { User } = require('../models/index');
const generateToken = require('../Helpers/createToken.helper');

const checkUser = async (displayName, email) => {
  const userExists = await User.findOne({
    where: {
      displayName, email,
    },
  });
  console.log(userExists);
  if (userExists === null) {
    return false;
  }
  return true;
};

const createUserService = async ({ displayName, email, password, image }) => {
  const userExists = await checkUser(displayName, email);
  if (userExists) { 
    return { success: false, message: 'User already registered' };
  }
  const userCreation = await User.create({
    displayName, email, password, image,
  });
  if (userCreation) {
    const token = await generateToken(email);
    return {
      success: true, token,
    };
  }
  return {
    success: false,
  };
};

module.exports = createUserService;