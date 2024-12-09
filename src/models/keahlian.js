'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keahlian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Keahlian.init({
    id_user: DataTypes.INTEGER,
    keahlian: DataTypes.STRING,
    tingkat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Keahlian',
        tableName:'keahlian'
  });
  return Keahlian;
};