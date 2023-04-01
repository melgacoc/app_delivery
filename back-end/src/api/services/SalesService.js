const { Sale, SaleProduct } = require('../../database/models');

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

module.exports = {
  create,
};