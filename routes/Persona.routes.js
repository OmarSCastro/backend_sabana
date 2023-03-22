const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const { deletePersonaSchema, getPersonaSchema, updatePersonaSchema, createPersonaSchema } = require('../schemas/Persona.schema');
const PersonaService = require('../services/Persona.service');
const router = express.Router();
const service = new PersonaService

router.get('/', async(req, res, next) => {
    try {
        const personas = await service.find();
        res.status(200).json(personas)
    } catch (error) {
        next(error)
    }
});

router.get('/id_persona', 
    validatorHandler(getPersonaSchema, 'params'),
    async(req, res, next) => {
    try {
        const {id_persona} = req.params;
        const persona = await service.findOne(id_persona);
        res.status(200).json(persona)
    } catch (error) {
        next(error)
    }
});

router.post('/', 
    validatorHandler(createPersonaSchema, 'body'),
    async(req, res, next) => {
    try {
        const body = req.body;
        const newPersona = await service.create(body);
        res.status(200).json(newPersona)
    } catch (error) {
        next(error)
    }
});

router.patch('/id_persona', 
    validatorHandler(getPersonaSchema, 'params'),
    validatorHandler(updatePersonaSchema, 'body'),
    async(req, res, next) => {
    try {
        const {id_persona} = req.params;
        const body = req.body;
        const persona = await service.update(id_persona, body);
        res.status(200).json(persona);
    } catch (error) {
        next(error)
    }
});

router.delete('/id_persona', 
    validatorHandler(getPersonaSchema, 'params'),
    async(req, res, next) => {
    try {
        const {id_persona} = req.params;
        await service.delete(id_persona);
        res.status(200).json(id_persona);
    } catch (error) {
        next(error)
    }
});

module.exports = router;
