module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    productId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    timestamps: false,
    tableName: 'sales_products', 
    underscored: true,
  });

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    models.SaleProduct.belongsTo(models.Product, {
      as: 'product',
      through: models.Product,
      foreignKey: 'productId',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }

  return SaleProduct;
}