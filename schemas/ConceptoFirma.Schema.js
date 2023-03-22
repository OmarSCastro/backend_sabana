const Joi = require('joi');

const id_concepto_firma = Joi.number().integer();
const nombre = Joi.string();

const createConceptoFirmaSchema = Joi.object({
    nombre: nombre.required(),
});
const updateConceptoFirmaSchema = Joi.object({
    nombre: nombre.required(),
});
const getConceptoFirmaSchema = Joi.object({
    id_concepto_firma: id_concepto_firma,
});
const deleteConceptoFirmaSchema = Joi.object({
    id_concepto_firma: id_concepto_firma.required(),
});

module.exports = {
    createConceptoFirmaSchema,
    updateConceptoFirmaSchema,
    getConceptoFirmaSchema,
    deleteConceptoFirmaSchema
}
