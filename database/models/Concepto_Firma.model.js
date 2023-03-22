const { Model, DataTypes } = require('sequelize');

const CONCEPTO_FIRMA_TABLE = 'conceptoFirma';

const ConceptoFirmaSchema = {
    id_concepto_firma:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING
    }
};
class ConceptoFirma extends Model {
    static associate(models){
        this.hasMany(models.firma, {
            // as: 'FirmaConceptoFirma',
            foreignKey: 'id_concepto_firma'
        });
    };

    static config(sequelize){
        return{
            sequelize,
            tableName: CONCEPTO_FIRMA_TABLE,
            modelName: 'conceptoFirma',
            timestamps: false
        }
    }
}

module.exports = {
    CONCEPTO_FIRMA_TABLE,
    ConceptoFirmaSchema,
    ConceptoFirma
}