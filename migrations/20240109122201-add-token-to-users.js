'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'user_name', {
      type: Sequelize.STRING,
      allowNull: true, // Set to false if 'token' is not nullable
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'user_name');
  }
};
