const { Router } = require('express');

const usersController = require('../controllers/UsersController');

const usersRoutes = Router();

usersRoutes.post('/login', usersController.login);

module.exports = usersRoutes;