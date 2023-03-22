const Joi = require('joi');

const id_firma = Joi.number().integer();
const concepto = Joi.string();
const id_persona = Joi.number().integer();

const createFirmaSchema = Joi.object({
    concepto: concepto.required(),
    id_persona: id_persona.required(),
});
const updateFirmaSchema = Joi.object({
    concepto: concepto,
    id_persona: id_persona
});
const getFirmaSchema = Joi.object({
    id_firma: id_firma,
});
const deleteFirmaSchema = Joi.object({
    id_firma: id_firma.required(),
});

module.exports = {
    createFirmaSchema,
    updateFirmaSchema,
    getFirmaSchema,
    deleteFirmaSchema
}
