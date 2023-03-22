const { Model, DataTypes } = require('sequelize');

const FIRMA_TABLE = 'firma';
const FirmaSchema = {

    id_firma: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    concepto:{
        allowNull: false,
        type: DataTypes.STRING
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
    }

}

class Firma extends Model {
    static associate(models) {
        //todo hacer la asociacion correspondiente con persona
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