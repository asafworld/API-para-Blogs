const getCategoriesService = require('../services/getCategories.service');

const getCategoriesController = async (req, res) => {
  const serviceAnswer = await getCategoriesService();
  if (serviceAnswer.success) {
    return res.status(200).json(serviceAnswer.categories);
  }
  return res.status(404).json({ message: 'No category registered' });
};

module.exports = getCategoriesController;