"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Level_Travelers", [
      {
        name: "Newbie",
        badge: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seasonal",
        badge: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Traveller",
        badge: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Explorer",
        badge: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Level_Travelers", null, {});
  },
};
