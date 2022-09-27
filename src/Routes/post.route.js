const express = require('express');
const postController = require('../controllers/createPost.controller');
const getPostsController = require('../controllers/getPosts.controller');
const checkToken = require('../middlewares/checkToken.middleware');
const { checkPostFields, findCategory } = require('../middlewares/checkCreatePost.middleware');

const route = express.Router();

route.post('/', checkToken, checkPostFields, findCategory, postController);
route.get('/', checkToken, getPostsController);

module.exports = route;