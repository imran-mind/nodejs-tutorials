const express = require('express');
const { registerUser, loginUser, getUsers } = require('../userController');
const { userRegisterValidate, userLoginValidate } = require('../utils/userValiadation');
const { ensureAuthenticated } = require('../utils/auth');
const routes = express.Router();



routes.post('/register', userRegisterValidate ,registerUser);

routes.post('/login', userLoginValidate, loginUser);

routes.get('/users', ensureAuthenticated, getUsers);


module.exports = routes;