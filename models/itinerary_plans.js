"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Itinerary_Plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Itinerary_Plans.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Itinerary_Plans.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      preference_1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preference_2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Itinerary_Plans",
    }
  );
  return Itinerary_Plans;
};
