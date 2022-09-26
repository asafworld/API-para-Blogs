const { Category } = require('../models/index');

const createCategoryService = async ({ name }) => {
    const userCreation = await Category.create({
      name,
    });
    if (userCreation) {
      return {
        success: true,
        info: userCreation,
        id: userCreation.dataValues.id,
      };
    }
    return {
      success: false,
    };
};

module.exports = createCategoryService;