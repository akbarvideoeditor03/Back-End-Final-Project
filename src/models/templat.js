'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Templat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Templat.init({
    link_gambar: DataTypes.STRING,
    caption: DataTypes.STRING,
    link_page: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Templat',
    tableName: 'templat'
  });
  return Templat;
};