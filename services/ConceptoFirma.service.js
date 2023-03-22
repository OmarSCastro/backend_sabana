const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class ConceptoFirmaService {
    constructor(){}

    async create(data){
        const newConceptoFirma = await models.conceptoFirma.create(data);
        return newConceptoFirma;
    };

    async find(){
        const res = await models.conceptoFirma.findAll();
        return res;
    };

    async findOne(id){
        const conceptoFirma = await models.conceptoFirma.findByPk(id);
        if (!conceptoFirma) {
            boom.notFound('Concepto no encontrado');
        }
        return conceptoFirma;
    };

    async update(id, data){
        const conceptoFirmaActualizar = await this.findOne(id);
        const res = await conceptoFirmaActualizar.update(data);
        return res;
    };

    async delete(id){
        const conceptoFirmaEliminar = await this.findOne(id);
        await conceptoFirmaEliminar.destroy();
        return {
            message: 'Concepto de Firma eliminado',
            id
        }
    };
};

module.exports = ConceptoFirmaService