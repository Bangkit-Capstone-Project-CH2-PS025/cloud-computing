'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Detail_Plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itinerary_plan_id: {
        type: Sequelize.INTEGER
      },
      dest1: {
        type: Sequelize.STRING
      },
      dest2: {
        type: Sequelize.STRING
      },
      dest3: {
        type: Sequelize.STRING
      },
      dest4: {
        type: Sequelize.STRING
      },
      dest5: {
        type: Sequelize.STRING
      },
      dest6: {
        type: Sequelize.STRING
      },
      dest7: {
        type: Sequelize.STRING
      },
      dest8: {
        type: Sequelize.STRING
      },
      dest9: {
        type: Sequelize.STRING
      },
      dest10: {
        type: Sequelize.STRING
      },
      dest11: {
        type: Sequelize.STRING
      },
      dest12: {
        type: Sequelize.STRING
      },
      dest13: {
        type: Sequelize.STRING
      },
      dest14: {
        type: Sequelize.STRING
      },
      dest15: {
        type: Sequelize.STRING
      },
      dest16: {
        type: Sequelize.STRING
      },
      dest17: {
        type: Sequelize.STRING
      },
      dest18: {
        type: Sequelize.STRING
      },
      dest19: {
        type: Sequelize.STRING
      },
      dest20: {
        type: Sequelize.STRING
      },
      dest21: {
        type: Sequelize.STRING
      },
      dest22: {
        type: Sequelize.STRING
      },
      dest23: {
        type: Sequelize.STRING
      },
      dest24: {
        type: Sequelize.STRING
      },
      dest25: {
        type: Sequelize.STRING
      },
      dest26: {
        type: Sequelize.STRING
      },
      dest27: {
        type: Sequelize.STRING
      },
      dest28: {
        type: Sequelize.STRING
      },
      dest29: {
        type: Sequelize.STRING
      },
      dest30: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Detail_Plans');
  }
};