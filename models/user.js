"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Level_Traveler, {
        foreignKey: "level_id",
        as: "level_traveler",
      });

      User.hasMany(models.Visited_Place, {
        foreignKey: "user_id",
        as: "visited_place",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email_token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      images: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["ADMIN", "USER"],
        allowNull: false,
      },
      xp: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      level_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
