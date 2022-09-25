const express = require('express');
const createUserController = require('../controllers/createUser.controller');
const checkUserInfo = require('../middlewares/checkCreateUserInfo.middleware');

const route = express.Router();

route.post('/', checkUserInfo, createUserController);

module.exports = route;