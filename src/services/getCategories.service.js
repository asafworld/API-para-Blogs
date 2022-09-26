const { Category } = require('../models/index');

const getCategoriesService = async () => {
  const categories = await Category.findAll();
  if (categories) {
    return {
      success: true,
      categories,
    };
  }
  return {
    success: false,
  };
};

module.exports = getCategoriesService;