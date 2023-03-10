const Joi = require('joi');

const id_servicio = Joi.number().integer();
const servicio = Joi.string();

const createServicioSchema = Joi.object({
    servicio: servicio.required() 
});

const updateServicioSchema = Joi.object({
    servicio: servicio()
});

const getServicioSchema = Joi.object ({
    id_servicio,
});

const deleteServicioSchema = Joi.object ({
    id_servicio: id_servicio.required(),
});

module.exports = {createServicioSchema, updateServicioSchema, getServicioSchema, deleteServicioSchema};

