const { Category } = require('../models/index');

const findCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const check = await Category.findAll({
    where: {
      id: categoryIds,
    },
  });
  if (check.length !== categoryIds.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  return next();
};

const checkPostFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const fieldsArr = [title, content];
  const check = fieldsArr.some((fields) => fields === undefined || fields === '');
  if (check) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const type = Array.isArray(categoryIds);
  if (!type || categoryIds.length <= 0) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  return next();
};

module.exports = {
  findCategory,
  checkPostFields,
};