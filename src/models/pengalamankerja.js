'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PengalamanKerja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PengalamanKerja.init({
    id_user: DataTypes.INTEGER,
    lokasi: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    detail: DataTypes.STRING,
    tahun_mulai: DataTypes.DATE,
    tahun_selesai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PengalamanKerja',
        tableName:'pengalaman_kerja'
  });
  return PengalamanKerja;
};