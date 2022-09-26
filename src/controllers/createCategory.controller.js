const createCategoryService = require('../services/createCategory.service');

const createCategoryController = async (req, res) => {
  const serviceAnswer = await createCategoryService(req.body);
  console.log(serviceAnswer);
  if (serviceAnswer.success) {
    return res.status(201).json({
      id: serviceAnswer.id,
      name: req.body.name,
    });
  }
  return res.status(500).end();
};

module.exports = createCategoryController;