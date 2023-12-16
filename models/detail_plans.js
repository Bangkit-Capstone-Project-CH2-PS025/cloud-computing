'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail_Plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Detail_Plans.init({
    itinerary_plan_id: DataTypes.INTEGER,
    dest1: DataTypes.STRING,
    dest2: DataTypes.STRING,
    dest3: DataTypes.STRING,
    dest4: DataTypes.STRING,
    dest5: DataTypes.STRING,
    dest6: DataTypes.STRING,
    dest7: DataTypes.STRING,
    dest8: DataTypes.STRING,
    dest9: DataTypes.STRING,
    dest10: DataTypes.STRING,
    dest11: DataTypes.STRING,
    dest12: DataTypes.STRING,
    dest13: DataTypes.STRING,
    dest14: DataTypes.STRING,
    dest15: DataTypes.STRING,
    dest16: DataTypes.STRING,
    dest17: DataTypes.STRING,
    dest18: DataTypes.STRING,
    dest19: DataTypes.STRING,
    dest20: DataTypes.STRING,
    dest21: DataTypes.STRING,
    dest22: DataTypes.STRING,
    dest23: DataTypes.STRING,
    dest24: DataTypes.STRING,
    dest25: DataTypes.STRING,
    dest26: DataTypes.STRING,
    dest27: DataTypes.STRING,
    dest28: DataTypes.STRING,
    dest29: DataTypes.STRING,
    dest30: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Detail_Plans',
  });
  return Detail_Plans;
};