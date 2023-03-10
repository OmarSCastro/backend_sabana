const Joi = require('joi');

const id_modulo = Joi.number().integer();
const modulo = Joi.string();

const createModuloSchema = Joi.object({
    modulo: modulo.required(),
});

const updateModuloSchema = Joi.object({
    modulo: modulo,
});

const getModuloSchema = Joi.object ({
    id_modulo,
});

const deleteModuloSchema = Joi.object ({
    id_modulo: id_modulo.required(),
});

module.exports = {createModuloSchema, updateModuloSchema, getModuloSchema, deleteModuloSchema};
