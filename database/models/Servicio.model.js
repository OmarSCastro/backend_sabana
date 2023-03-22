const { Model, DataTypes, Sequelize } = require('sequelize');

const SERVICIO_TABLE = 'servicio';
const ServicioSchema = {
    id_servicio: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    
    servicio: {
        allowNull: false,
        type: DataTypes.STRING
    },

    id_ruta: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'ruta',
            key: 'id_ruta'
        },
        onUpdate: 'CASCADE', // Esto ocurre al actualizar, un efecto en cascada y tambien se actualiza
        onDelete: 'SET NULL' // Esto ocurre al borrar, se establece a null
    }
}

class Servicio extends Model {
    static associate(models) {
        this.belongsTo(models.ruta, {
            as: 'ruta',
            foreignKey: 'id_ruta'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: SERVICIO_TABLE,
            modelName: 'servicio',
            timestamps: false
        }
    }
}

module.exports = {
    SERVICIO_TABLE,
    ServicioSchema,
    Servicio
};