'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PendidikanTerakhir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PendidikanTerakhir.init({
    id_user: DataTypes.INTEGER,
    institusi: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    tahun_mulai: DataTypes.DATE,
    tahun_selesai: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PendidikanTerakhir',
    tableName:'pendidikan_terakhir'
  });
  return PendidikanTerakhir;
};