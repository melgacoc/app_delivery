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
    models.User.belongsToMany(models.Sale, {
      as: 'buyers',
      through: Sale,
      foreignKey: 'userId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    models.User.belongsToMany(models.Sale, {
      as: 'sellers',
      through: Sale,
      foreignKey: 'sellerId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  }

  return Sale;
}