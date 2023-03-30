const { Router } = require('express');

const productsController = require('../controllers/ProductsController');

const productsRoutes = Router();

productsRoutes.get('/', productsController.findAll);

module.exports = productsRoutes;