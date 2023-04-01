const { Router } = require('express');

const salesController = require('../controllers/SalesController');

const salesRoutes = Router();

salesRoutes.post('/new-order', salesController.create);
salesRoutes.get('/:userId', salesController.getOrders);

module.exports = salesRoutes;