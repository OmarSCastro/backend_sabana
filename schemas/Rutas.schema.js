const Joi = require('joi');

const id_ruta = Joi.number().integer();
const ruta = Joi.string();
const id_modulo = Joi.number().integer();
const id_servicio = Joi.number().integer();

const createRutaSchema = Joi.object({
    ruta: ruta.required(),
    id_modulo: id_modulo.required() ,
    id_servicio: id_servicio.required() 
});

const updateRutaSchema = Joi.object({
    ruta: ruta,
    id_modulo: id_modulo,
    id_servicio: id_servicio
});

const getRutaSchema = Joi.object ({
    id_ruta,
});

const deleteRutaSchema = Joi.object ({
    id_ruta: id_ruta.required(),
});

module.exports = {createRutaSchema, updateRutaSchema, getRutaSchema, deleteRutaSchema};

