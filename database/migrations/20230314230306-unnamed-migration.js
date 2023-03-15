'use strict';

const { MODULO_TABLE, ModuloSchema } = require('../models/Modulo.model');
const { RUTA_TABLE, RutaSchema } = require('../models/Ruta.model');
const { SERVICIO_TABLE, ServicioSchema } = require('../models/Servicio.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(MODULO_TABLE, ModuloSchema);
    await queryInterface.createTable(RUTA_TABLE, RutaSchema);
    await queryInterface.createTable(SERVICIO_TABLE, ServicioSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(MODULO_TABLE);
    await queryInterface.dropTable(RUTA_TABLE);
    await queryInterface.dropTable(SERVICIO_TABLE);
  }
};
