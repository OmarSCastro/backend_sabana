const { Model, DataTypes } = require('sequelize');

const FIRMA_TABLE = 'firma';
const FirmaSchema = {

    id_firma: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    id_concepto:{
        allowNull: false,
       type: DataTypes.INTEGER,
       references: {
        model: 'conceptoFirma',
        key: 'id_concepto_firma'
       },
       onUpdate: 'CASCADE',
       onDelete: 'SET NULL' 
    },

    id_persona: {
       allowNull: false,
       type: DataTypes.INTEGER,
       references: {
        model: 'persona',
        key: 'id_persona'
       },
       onUpdate: 'CASCADE',
       onDelete: 'SET NULL' 
    },
};

class Firma extends Model {
    static associate(models) {

        this.belongsTo(models.conceptoFirma, {
            foreignKey: 'id_concepto_firma'
        });

        this.belongsTo(models.persona, {
            foreignKey: 'id_persona'
        });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: FIRMA_TABLE,
            modelName: 'firma',
            timestamps: false
        }
    };
}

module.exports = {
    FIRMA_TABLE,
    FirmaSchema,
    Firma
}