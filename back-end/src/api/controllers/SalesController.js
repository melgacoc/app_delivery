const salesService = require('../services/SalesService');

const create = async (req, res) => {
  const createdSale = await salesService.create(req.body);
  return res.status(201).json(createdSale);
};

const getOrders = async (req, res) => {
  const { userId } = req.body.params;
  const orders = await salesService.getOrders(userId);
  return res.status(200).json(orders);
};

module.exports = {
  create,
  getOrders,
};