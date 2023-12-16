"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Travel_Tips", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
      },
      author: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      contents: {
        type: Sequelize.TEXT,
      },
      image_cover: {
        type: Sequelize.TEXT,
      },
      image_1: {
        type: Sequelize.TEXT,
      },
      image_2: {
        type: Sequelize.TEXT,
      },
      image_3: {
        type: Sequelize.TEXT,
      },
      image_4: {
        type: Sequelize.TEXT,
      },
      image_5: {
        type: Sequelize.TEXT,
      },
      total_views: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Travel_Tips");
  },
};
