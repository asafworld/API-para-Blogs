const createUserService = require('../services/createUser.service');

const createUserController = async (req, res) => {
  const serviceAnswer = await createUserService(req.body);
  if (serviceAnswer.success) {
    return res.status(201).json({ token: serviceAnswer.token });
  }
  return res.status(409).json({ message: serviceAnswer.message });
};

module.exports = createUserController;