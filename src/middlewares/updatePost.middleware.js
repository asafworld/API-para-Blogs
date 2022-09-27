const { User, BlogPost } = require('../models/index');

const checkUser = async (req, res, next) => {
  const id = Number(req.params.id);
  const { email } = req.headers;
  const post = await BlogPost.findByPk(id);
  const user = await User.findByPk(post.dataValues.userId);
  if (user && user.dataValues.email === email) {
      return next();
  }
  return res.status(401).json({ message: 'Unauthorized user' });
};

const checkFields = async (req, res, next) => {
  const { title, content } = req.body;
  const arr = [title, content];
  const check = arr.some((f) => f === undefined || f === '');
  if (check) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = {
  checkUser,
  checkFields,
};