const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class FirmaService{
    constructor(){}

    async create(data){
        const newFirma = await models.firma.create(data);
        return newFirma;
    };

    async find(){
        const res = await models.firma.findAll();
        return res;
    };

    async findOne(id_firma){
        const firma = await models.firma.findByPk(id_firma);
        if (!firma) {
            boom.notFound('Firma no encontrada');
        }
        return firma
    };

    async update(id_firma, data){
        const firma = await this.findOne(id_firma);
        const res = await firma.update(data);
        return res
    };
    
    async delete(id_firma){
        const firma = await this.findOne(id_firma);
        await firma.destroy();
        return {
            message: 'Firma eliminada',
            id_firma
        }
    };

}

module.exports = FirmaService