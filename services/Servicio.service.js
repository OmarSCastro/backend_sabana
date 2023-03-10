const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class ServicioService {
    constructor(){}

    async create(data){
        const newServicio = await models.Servicio.create(data)
        return newServicio;
    };

    async find(){
        const res = await models.Servicio.findAll();
        return res;
    };

    async findOne(){
        const servicio = await models.Servicio.findByPk(id);
        if (!servicio) {
            boom.notFound('Servicio no encontrado');
        }
        return servicio
    };

    async update(id, changes){
        const servicio = await this.findOne(id);
        const res = await servicio.update(changes);
        return res
    };
    
    async delete(id){
        const servicio = await this.findOne(id);
        await servicio.destroy();
        return {
            message: 'Registro borrado',
            id
        } 
    };
};

module.exports = ServicioService;