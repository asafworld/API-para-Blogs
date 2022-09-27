const { BlogPost, User, Category } = require('../models/index');

const getPostsService = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  console.log(posts);
  if (posts) {
    return {
      success: true,
      posts,
    };
  }
  return {
    success: false,
  };
};

module.exports = getPostsService;