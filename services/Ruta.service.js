const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class RutaService {
    constructor(){}

async create(data){
    const newRuta = await models.Ruta.create(data)
    return newRuta
}
async find(){
    const res = await models.Ruta.findAll();
    return res;
}
async findOne(id){
    const ruta = await models.Ruta.findByPk(id);
    if (!ruta) {
        boom.notFound('Ruta no encontrada');
    }
    return ruta
}
async update (id, changes){
    const ruta = await this.findOne(id);
    const res = await ruta.update(changes);
    return res
}
async delete(id){
    const ruta = await this.findOne(id);
    await models.Ruta.destroy()
    return {
        message: 'Ruta eliminada',
        id
    }
}

}

module.exports = RutaService