const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class PersonaService{
    constructor(){}

    async create(data){
        const newPersona = await models.persona.create(data)
        return newPersona 
    };

    async find(){
        const res = await models.persona.findAll();
        return res;
    };

    async findOne(id_persona){
        const persona = await models.persona.findByPk(id_persona);
        if (!persona) {
            boom.notFound('Persona no encontrada')
        }
        return persona
    }    
    async update(id_persona, data){
        const persona = await this.findOne(id_persona);
        const res = await persona.update(data);
        return res;
    }
    async delete(id_persona){
        const persona = await this.findOne(id_persona);
        await persona.destroy();
        return {
            message: 'Persona eliminada',
            id_persona
        }
    }

}

module.exports = PersonaService