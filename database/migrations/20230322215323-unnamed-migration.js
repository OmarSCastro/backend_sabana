'use strict';

const { FIRMA_TABLE, FirmaSchema } = require('../models/firma.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(FIRMA_TABLE, FirmaSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(FIRMA_TABLE);

  }
};
