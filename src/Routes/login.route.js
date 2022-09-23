const express = require('express');
const loginController = require('../controllers/login.controller');
const checkLoginInfo = require('../middlewares/checkLoginInfo.middleware');

const route = express.Router();

route.post('/', checkLoginInfo, loginController);

module.exports = route;