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
    pengalaman_kerja: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    tahun_mulai: DataTypes.DATE,
    tahun_selesai: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PengalamanKerja',
    tableName:'pengalaman_kerja'
  });
  return PengalamanKerja;
};