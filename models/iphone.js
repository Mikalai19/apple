'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Iphone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Iphone.init({
    name: {
      type: DataTypes.STRING,
      validate: { notNull: true }

    },
    model: DataTypes.INTEGER,
    color: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      validate: { isInt: { msg: 'Number is integer' } }
    },

    productInfo: DataTypes.STRING,
    size: DataTypes.STRING,
    storePickupOption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Iphone',
  });
  return Iphone;
};