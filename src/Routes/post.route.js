const express = require('express');
const postController = require('../controllers/createPost.controller');
const checkToken = require('../middlewares/checkToken.middleware');
const { checkPostFields, findCategory } = require('../middlewares/checkCreatePost.middleware');

const route = express.Router();

route.post('/', checkToken, checkPostFields, findCategory, postController);

module.exports = route;