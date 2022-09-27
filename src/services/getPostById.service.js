const { BlogPost, User, Category } = require('../models/index');

const getPostByIdService = async (id) => {
  const post = await BlogPost.findOne({
    where: {
      id,
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (post) {
    return {
      success: true,
      post,
    };
  }
  return {
    success: false,
  };
};

module.exports = getPostByIdService;