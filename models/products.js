module.exports = (sequelize, DataType) => {
  const Products = sequelize.define("Products", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    available: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    classMethods: {
      associate: (models) => {
        Products.belongsTo(models.Users);
      }
    }
  });
  return Products;
};
 