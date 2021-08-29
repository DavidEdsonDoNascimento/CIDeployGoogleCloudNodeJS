'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.Categories, {
        foreignKey: 'category_id'
      })
    }
  };
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    discount_price: DataTypes.DOUBLE,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};