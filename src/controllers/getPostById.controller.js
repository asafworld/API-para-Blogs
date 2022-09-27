const getPostByIdService = require('../services/getPostById.service');

const getPostByIdController = async (req, res) => {
  const id = Number(req.params.id);
  const serviceAnswer = await getPostByIdService(id);
  console.log(serviceAnswer);
  if (serviceAnswer.success) {
    return res.status(200).json(serviceAnswer.post);
  }
  return res.status(404).json({ message: 'Post does not exist' });
};

module.exports = getPostByIdController;