'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrestasiKerja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PrestasiKerja.init({
    id_pengalaman_kerja: DataTypes.INTEGER,
    prestasi: DataTypes.STRING,
    tahun: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PrestasiKerja',
    tableName: 'prestasi_kerja'
  });
  return PrestasiKerja;
};