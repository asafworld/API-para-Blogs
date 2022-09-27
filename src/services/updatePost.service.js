const { BlogPost, User, Category } = require('../models/index');

const getPostAfterUpdate = async (id) => {
  const post = await BlogPost.findOne({
    where: {
      id,
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post.dataValues;
};

const updatePostService = async (id, title, content) => {
  const update = await BlogPost.update({
    title,
    content,
  },
  { where: { id } });
  const postUpdt = await getPostAfterUpdate(id);
  if (update) {
    return {
      success: true,
      update: postUpdt,
    };
  }
  return {
    success: false,
  };
};

module.exports = updatePostService;