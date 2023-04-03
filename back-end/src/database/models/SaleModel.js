module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    totalPrice: { type: DataTypes.DECIMAL(9,2), allowNull: false },
    deliveryAddress: { type: DataTypes.STRING, allowNull: false },
    deliveryNumber: { type: DataTypes.STRING, allowNull: false },
    saleDate: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamps: false,
    tableName: 'sales', 
    underscored: true,
  });

  Sale.associate = (models) => {
    models.User.hasMany(models.Sale, {
      as: 'buyer',
      // through: Sale,
      foreignKey: 'userId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    models.User.hasMany(models.Sale, {
      as: 'seller',
      // through: Sale,
      foreignKey: 'sellerId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }

  return Sale;
}