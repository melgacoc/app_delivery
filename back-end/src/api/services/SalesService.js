const { Sale, SaleProduct, User, Product } = require('../../database/models');

const create = async (sale) => {
  const createdSale = await Sale.create({
    userId: sale.userId,
    sellerId: sale.sellerId,
    totalPrice: sale.totalPrice,
    deliveryAddress: sale.deliveryAddress,
    deliveryNumber: sale.deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
  });

  await Promise.all(sale.order.map(async ({ id, quantity }) => {
      await SaleProduct.create({
        saleId: createdSale.id,
        productId: id,
        quantity,
      });
    }));

  return createdSale;
};

const getOrders = async (userId) => {
  const orders = await Sale.findAll({
    where: { userId },
  });
  return orders;
};

const getOrderById = async (id) => {
  const order = await Sale.findOne({
    where: { id },
  });

  const products = await SaleProduct.findAll({
    where: { saleId: id },
    include: { model: Product, as: 'product' },
  });

  if (order) {
    const seller = await User.findOne({
      where: { id: order.sellerId },
    });
    return { order, products, seller };
  }
};

const getOrdersBySeller = async (sellerId) => {
  const orders = await Sale.findAll({
    where: { sellerId },
  });
  return orders;
};

const changeStatus = async (id, status) => {
  await Sale.update(
    { status },
    { where: { id } },
  );

  const order = await Sale.findOne({
    where: { id },
  });
  return order;
};

module.exports = {
  create,
  getOrders,
  getOrderById,
  getOrdersBySeller,
  changeStatus,
};