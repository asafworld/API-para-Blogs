const loginService = require('../services/login.service');

const loginController = async (req, res) => {
  const serviceAnswer = await loginService(req.body);
  console.log(serviceAnswer);
  if (serviceAnswer.success) {
    return res.status(200).json({ token: serviceAnswer.token });
  }
  return res.status(400).json({ message: serviceAnswer.message });
};

module.exports = loginController;