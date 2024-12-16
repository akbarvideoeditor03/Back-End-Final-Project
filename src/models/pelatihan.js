'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelatihan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pelatihan.init({
    id_user: DataTypes.INTEGER,
    pelatihan: DataTypes.STRING,
    tahun_mulai: DataTypes.DATE,
    tahun_selesai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pelatihan',
    tableName: 'pelatihan'
  });
  return Pelatihan;
};