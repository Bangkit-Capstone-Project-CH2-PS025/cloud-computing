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
      user_id: DataTypes.INTEGER,
      author: DataTypes.STRING,
      title: DataTypes.STRING,
      contents: DataTypes.TEXT,
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Travel_Tips",
    }
  );
  return Travel_Tips;
};
