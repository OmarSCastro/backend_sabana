const { Model, DataTypes } = require('sequelize');

const PERSONAS_TABLE = 'persona';
const PersonaSchema = {
    id_persona:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    },
    a_paterno: {
        allowNull: false,
        type: DataTypes.STRING
    },
    a_materno: {
        allowNull: false,
        type: DataTypes.STRING
    },
    cargo: {
        allowNull: false,
        type: DataTypes.STRING
    },
    actividad: {
        allowNull: false,
        type: DataTypes.STRING
    }
};

class Persona extends Model {
    static associate(models){
        //todo falta hacer asociacion a firmas
    };

    static config(sequelize){
        return {
            sequelize, 
            tableName: PERSONAS_TABLE,
            modelName: 'persona',
            timestamps: false
        }
    }
}

module.exports = {
    PERSONAS_TABLE,
    PersonaSchema,
    Persona
}