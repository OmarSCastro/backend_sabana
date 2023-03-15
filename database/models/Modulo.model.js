const { Model, DataTypes } = require('sequelize');

const MODULO_TABLE = 'modulo';
const ModuloSchema = {
    id_modulo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    modulo: {
        allowNull: false,
        type: DataTypes.STRING
    }
}

class Modulo extends Model {
    static associate(models) {
        this.hasMany(models.ruta, {
            as: 'moduloRutas',
            foreignKey: 'id_modulo'
        })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: MODULO_TABLE,
            modelName: 'modulo',
            timestamps: false
        }
    }
}

module.exports = {
    MODULO_TABLE,
    ModuloSchema,
    Modulo
};