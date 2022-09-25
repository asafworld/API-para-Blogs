const getUserByIdService = require('../services/getUserById.service');

const getUserByIdController = async (req, res) => {
  const id = Number(req.params.id);
  const getUser = await getUserByIdService(id);
  if (getUser.success) {
    return res.status(200).json(getUser.user);
  }
  return res.status(404).json({ message: getUser.message });
};

module.exports = getUserByIdController;