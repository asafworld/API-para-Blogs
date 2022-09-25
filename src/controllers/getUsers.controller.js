const getUsersService = require('../services/getUsers.service');

const getUsersController = async (req, res) => {
  const serviceAnswer = await getUsersService();
  if (serviceAnswer.success) {
    return res.status(200).json(serviceAnswer.users);
  }
  return res.status(404).json({ message: serviceAnswer.message });
};

module.exports = getUsersController;