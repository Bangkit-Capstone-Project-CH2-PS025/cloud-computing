"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Travel_Budgets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Travel_Budgets.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      budget_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      target: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      flight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      attractions: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shopping: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      food: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      others: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Travel_Budgets",
    }
  );
  return Travel_Budgets;
};
