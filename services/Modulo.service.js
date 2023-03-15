const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class ModuloService {
    constructor(){}

async create(data){
    const newModulo = await models.modulo.create(data)
    return newModulo
}
async find(){
    const res = await models.modulo.findAll();
    return res;
}
async findOne(id){
    const modulo = await models.modulo.findByPk(id);
    if (!modulo) {
        boom.notFound('Modulo no encontrado');
    }
    return modulo
}
async update (id, changes){
    const modulo = await this.findOne(id);
    const res = await modulo.update(changes);
    return res
}
async delete(id){
    const modulo = await this.findOne(id);
    await models.Modulo.destroy()
    return {
        message: 'Modulo eliminado',
        id
    }
}

}

module.exports = ModuloService