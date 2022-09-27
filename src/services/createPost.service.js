const Sequelize = require('sequelize');
const { BlogPost, User, PostCategory } = require('../models/index');
const config = require('../config/config');

const env = 'development';

const sequelize = new Sequelize(config[env]);

const findUser = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    return {
      success: true,
      userId: user.dataValues.id,
    };
  }
  return {
    success: false,
  };
};

const createPost = async (title, content, userId, t) => {
  const post = await BlogPost.create({
    title, content, userId,
   },
   { transaction: t });
   console.log(post);
  if (post) {
    return {
      success: true,
      post: post.dataValues,
    };
  }
  t.rollback();
  return {
    success: false,
  };
};

const createPostCategory = async (categoryIds, postId, t) => {
    const create = categoryIds.map(async (id) => {
      const created = await PostCategory.create({
        postId,
        categoryId: id,
      }, { transaction: t });
      if (!created) {
        return false;
      }
      return true;
    });
    const result = await Promise.all(create);
    if (result.every((e) => e === true)) {
      return { success: true };
    }
    return { success: false };
};

const postService = async (email, title, content, categoryIds) => {
  const t = await sequelize.transaction(); 
  const user = await findUser(email);
   if (!user.success) {
    return { success: false, message: 'Problem finding user.' };
   }
   const post = await createPost(title, content, user.userId, t);
   if (!post.success) {
    t.rollback();
    return { success: false, message: 'Unable to register post' };
   }
  const postCategory = await createPostCategory(categoryIds, post.post.id, t);
  console.log(postCategory);
  if (!postCategory.success) {
    t.rollback();
    return { success: false, message: 'Unable to register post categories' };
  }
  await t.commit();
  return { success: true, info: post.post, userId: user.userId };
};

module.exports = postService;