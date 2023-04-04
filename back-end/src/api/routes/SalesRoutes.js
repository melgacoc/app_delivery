const { Router } = require('express');

const salesController = require('../controllers/SalesController');

const salesRoutes = Router();

salesRoutes.post('/new-order', salesController.create);
salesRoutes.get('/:userid', salesController.getOrders);
salesRoutes.get('/order/:id', salesController.getOrderById);
salesRoutes.get('/seller/:id', salesController.getOrdersBySeller);

module.exports = salesRoutes;