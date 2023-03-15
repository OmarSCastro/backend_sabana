const { Model, DataTypes } = require('sequelize');

const RUTA_TABLE = 'rutas';
const RutaSchema = {
    id_ruta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    ruta: {
        allowNull: false,
        type: DataTypes.STRING
    },

    id_modulo: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'modulo',
            key: 'id_modulo'
        },
        onUpdate: 'CASCADE', // Esto ocurre al actualizar, un efecto en cascada y tambien se actualiza
        onDelete: 'SET NULL' // Esto ocurre al borrar, se establece a null
    },
    

}

class Ruta extends Model {
    static associate(models) {
        this.belongsTo(models.modulo, {
            // as:'moduloRuta',
            foreignKey: 'id_modulo'
        });

        this.hasOne(models.servicio, {
            // as:'moduloRuta',
            foreignKey: 'id_ruta'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: RUTA_TABLE,
            modelName: 'ruta',
            timestamps: false
        }
    }
}

module.exports = {
    RUTA_TABLE,
    RutaSchema,
    Ruta
};