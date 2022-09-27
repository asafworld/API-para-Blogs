const postService = require('../services/createPost.service');

const postController = async (req, res) => {
  const { email } = req.headers;
  const { title, content, categoryIds } = req.body;
  const serviceAnswer = await postService(email, title, content, categoryIds);
  console.log(serviceAnswer);
  if (serviceAnswer.success) {
    return res.status(201).json({
      id: serviceAnswer.info.id,
      title,
      content,
      userId: serviceAnswer.userId,
      updated: serviceAnswer.info.updatedAt,
      published: serviceAnswer.info.createdAt,
    });
  }
  return res.status(500).json({ message: serviceAnswer.message });
};

module.exports = postController;