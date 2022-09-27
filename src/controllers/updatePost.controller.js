const updatePostService = require('../services/updatePost.service');

const updatePostController = async (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;
  const serviceAnswer = await updatePostService(id, title, content);
  if (serviceAnswer.success) {
    return res.status(200).json(serviceAnswer.update);
  }
  return res.status(500).end();
};

module.exports = updatePostController;