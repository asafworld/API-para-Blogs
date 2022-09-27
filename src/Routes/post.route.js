const express = require('express');
const postController = require('../controllers/createPost.controller');
const getPostsController = require('../controllers/getPosts.controller');
const getPostByIdController = require('../controllers/getPostById.controller');
const updatePostController = require('../controllers/updatePost.controller');
const checkToken = require('../middlewares/checkToken.middleware');
const { checkPostFields, findCategory } = require('../middlewares/checkCreatePost.middleware');
const { checkUser, checkFields } = require('../middlewares/updatePost.middleware');

const route = express.Router();

route.post('/', checkToken, checkPostFields, findCategory, postController);
route.get('/', checkToken, getPostsController);
route.get('/:id', checkToken, getPostByIdController);
route.put('/:id', checkToken, checkUser, checkFields, updatePostController);

module.exports = route;