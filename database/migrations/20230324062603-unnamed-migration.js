'use strict';

const { SERVICIO_TABLE } = require('../models/Servicio.model');
const { DataTypes } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn(SERVICIO_TABLE, 'origen',{
        field: 'origen',
        allowNull: false,
        type: DataTypes.STRING,
      });
      await queryInterface.addColumn(SERVICIO_TABLE, 'destino',{
        field: 'destino',
        allowNull: false,
        type: DataTypes.STRING,
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(SERVICIO_TABLE, 'origen');
    await queryInterface.removeColumn(SERVICIO_TABLE, 'destino');
  }
};
