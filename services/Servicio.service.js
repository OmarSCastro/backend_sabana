const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class ServicioService {
    constructor(){}

    async create(data){
        const newServicio = await models.servicio.create(data)
        return newServicio;
    };

    async find(){
        const res = await models.servicio.findAll(
            {
                include: [
                    {
                        as: 'ruta',
                        model: models.ruta,
                        include: ['modulo']
                    }
                ]
            }
        );

        return res;
    };

    async findOne(id){
        const servicio = await models.servicio.findByPk(id, {
            include: ['ruta']
        });
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