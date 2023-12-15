"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Travel_Budgets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      budget_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      target: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      flight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      attractions: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stay: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shopping: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      food: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      others: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("Travel_Budgets");
  },
};
