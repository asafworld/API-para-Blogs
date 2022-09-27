const getPostsService = require('../services/getPosts.service');

const getPostsController = async (_req, res) => {
  const posts = await getPostsService();
  console.log(posts);
  if (posts.success) {
    return res.status(200).json(posts.posts);
  }
  return res.status(500).end();
};

module.exports = getPostsController;