const Joi = require('joi');

const id_persona = Joi.number().integer();
const nombre = Joi.string();
const a_paterno = Joi.string();
const a_materno = Joi.string();
const cargo = Joi.string();
const actividad = Joi.string();

const createPersonaSchema = Joi.object({
    nombre: nombre.required(),
    a_paterno: a_paterno.required(),
    a_materno: a_materno.required(),
    cargo: cargo.required(),
    actividad: actividad.required(),
});
const updatePersonaSchema = Joi.object({
    nombre: nombre,
    a_paterno: a_paterno,
    a_materno: a_materno,
    cargo: cargo,
    actividad: actividad
});
const getPersonaSchema = Joi.object({
    id_firma: id_firma,
});
const deletePersonaSchema = Joi.object({
    id_firma: id_firma.required(),
});

module.exports = {
    createPersonaSchema,
    updatePersonaSchema,
    getPersonaSchema,
    deletePersonaSchema
}