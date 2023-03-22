const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const { deleteConceptoFirmaSchema, getConceptoFirmaSchema, updateConceptoFirmaSchema, createConceptoFirmaSchema } = require('../schemas/ConceptoFirma.Schema');
const ConceptoFirmaService = require('../services/ConceptoFirma.service');
const router = express.Router();
const service = new ConceptoFirmaService;

router.get('/', async(req, res, next) => {
        try {
            const conceptosFirma = await service.find();
            res.status(200).json(conceptosFirma)
        } catch (error) {
            next(error)
        };
    }
);

router.get('/id_concepto_firma',
    validatorHandler(getConceptoFirmaSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id_concepto_firma} = req.params;
            const conceptoFirma = await service.findOne(id_concepto_firma);
            res.status(200).json(conceptoFirma)
        } catch (error) {
            next(error)
        };
    }
);

router.post('/',
    validatorHandler(createConceptoFirmaSchema, 'body'),
    async(req, res, next) => {
        try {
            const body = req.body;
            const newConceptoFirma = await service.create(body);
            res.status(200).json(newConceptoFirma)
        } catch (error) {
            next(error)
        };
    }
);

router.patch('/id_concepto_firma',
    validatorHandler(getConceptoFirmaSchema, 'params'),
    validatorHandler(updateConceptoFirmaSchema, 'body'),
    async(req, res, next) => {
        try {
            const {id_concepto_firma} = req.params;
            const body = req.body;
            const conceptoFirma = await service.update(id_concepto_firma, body)
            res.status(200).json(conceptoFirma)
        } catch (error) {
            next(error)
        };
    }
);

router.delete('/:id_concepto_firma',
    validatorHandler(deleteConceptoFirmaSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id_concepto_firma} = req.params;
            await service.delete(id_concepto_firma);
            res.status(200).json(id_concepto_firma)
        } catch (error) {
            next(error)
        };
    }
);

module.exports = router;