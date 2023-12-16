"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Find_Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Find_Trip.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departure: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      until: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      persons: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contact: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Find_Trip",
    }
  );
  return Find_Trip;
};
