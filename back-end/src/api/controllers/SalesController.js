const salesService = require('../services/SalesService');

const create = async (req, res) => {
  const createdSale = await salesService.create(req.body);
  return res.status(201).json(createdSale);
};

module.exports = {
  create,
};