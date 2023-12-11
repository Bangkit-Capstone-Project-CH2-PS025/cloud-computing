"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Level_Travelers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Level_Travelers.hasMany(models.User, {
        foreignKey: "level_id",
        as: "level_traveler",
      });
    }
  }
  Level_Travelers.init(
    {
      name: DataTypes.STRING,
      badge: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Level_Travelers",
    }
  );
  return Level_Travelers;
};
