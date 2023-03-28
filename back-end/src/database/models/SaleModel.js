module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    totalPrice: { type: DataTypes.INTEGER, allowNull: false },
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
    models.User.belongsToMany(models.Seller, {
      as: 'sellers',
      through: Sale,
      foreignKey: 'userId',
      otherKey: 'sellerId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    models.Seller.belongsToMany(models.User, {
      as: 'users',
      through: Sale,
      foreignKey: 'sellerId',
      otherKey: 'userId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }

  return Sale;
}