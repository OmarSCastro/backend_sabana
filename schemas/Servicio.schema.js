const Joi = require('joi');

const id_servicio = Joi.number().integer();
const servicio = Joi.string();
const id_ruta = Joi.number().integer();

const createServicioSchema = Joi.object({
    servicio: servicio.required(), 
    id_ruta: id_ruta.required()
});

const updateServicioSchema = Joi.object({
    servicio: servicio,
    id_ruta: id_ruta
});

const getServicioSchema = Joi.object ({
    id_servicio,
});

const deleteServicioSchema = Joi.object ({
    id_servicio: id_servicio.required(),
});

module.exports = {createServicioSchema, updateServicioSchema, getServicioSchema, deleteServicioSchema};

