const express = require('express');
const createUserController = require('../controllers/createUser.controller');
const getUsersController = require('../controllers/getUsers.controller');
const getUserByIdController = require('../controllers/getUserById.controller');
const checkUserInfo = require('../middlewares/checkCreateUserInfo.middleware');
const checkToken = require('../middlewares/checkToken.middleware');

const route = express.Router();

route.post('/', checkUserInfo, createUserController);
route.get('/', checkToken, getUsersController);
route.get('/:id', checkToken, getUserByIdController);

module.exports = route;