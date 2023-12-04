"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Visited_Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Visited_Place.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "vsited_place",
      });
    }
  }
  Visited_Place.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      month: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Visited_Place",
    }
  );
  return Visited_Place;
};
