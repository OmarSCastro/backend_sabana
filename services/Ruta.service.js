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
    console.log('************')
    console.log(res)
    console.log('************')
    return res;
};

async findOne(id){
    const ruta = await models.ruta.findByPk(id);
    if (!ruta) {
        boom.notFound('Ruta no encontrada');
    }
    return ruta
};

async update (id, changes){
    const ruta = await this.findOne(id);
    const res = await ruta.update(changes);
    return res
};

async delete(id){
    const ruta = await this.findOne(id);
    await models.Ruta.destroy()
    return {
        message: 'Ruta eliminada',
        id
    }
};


}

module.exports = RutaService