const express = require('express');
const createCategoryController = require('../controllers/createCategory.controller');
const getCategoriesController = require('../controllers/getCategories.controller');
const checkToken = require('../middlewares/checkToken.middleware');
const checkCategoryName = require('../middlewares/checkCreateCategory.middleware');

const route = express.Router();

route.post('/', checkToken, checkCategoryName, createCategoryController);
route.get('/', checkToken, getCategoriesController);

module.exports = route;
