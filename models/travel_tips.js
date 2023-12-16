"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Travel_Tips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Travel_Tips.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "travel_tips",
      });
    }
  }
  Travel_Tips.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contents: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_cover: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_1: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_2: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_3: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_4: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image_5: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      total_views: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Travel_Tips",
    }
  );
  return Travel_Tips;
};
