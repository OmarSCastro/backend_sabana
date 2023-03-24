'use strict';

const { CONCEPTO_FIRMA_TABLE, ConceptoFirmaSchema } = require('../models/Concepto_Firma.model');
const { PERSONAS_TABLE, PersonaSchema } = require('../models/personas.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PERSONAS_TABLE, PersonaSchema);
    await queryInterface.createTable(CONCEPTO_FIRMA_TABLE, ConceptoFirmaSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PERSONAS_TABLE);
    await queryInterface.dropTable(CONCEPTO_FIRMA_TABLE);
  }
};
