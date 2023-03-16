const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class RutaService {
    constructor(){}

async create(data){
    const newRuta = await models.ruta.create(data)
    return newRuta
};

async find(){
    const res = await models.ruta.findAll();
    return res;
};

async findOne(id_ruta){
    const ruta = await models.ruta.findByPk(id_ruta);
    if (!ruta) {
        boom.notFound('Ruta no encontrada');
    }
    return ruta
};

async update (id_ruta, changes){
    const ruta = await this.findOne(id_ruta);
    const res = await ruta.update(changes);
    return res
};

async delete(id_ruta){
    const ruta = await this.findOne(id_ruta);
    await models.Ruta.destroy()
    return {
        message: 'Ruta eliminada',
        id_ruta
    }
};


}

module.exports = RutaService