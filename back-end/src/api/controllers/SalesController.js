const salesService = require('../services/SalesService');

const create = async (req, res) => {
  const createdSale = await salesService.create(req.body);
  return res.status(201).json(createdSale);
};

const getOrders = async (req, res) => {
  const { userid } = req.params;
  const orders = await salesService.getOrders(userid);
  return res.status(200).json(orders);
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await salesService.getOrderById(id);
  return res.status(200).json(order);
};

module.exports = {
  create,
  getOrders,
  getOrderById,
};