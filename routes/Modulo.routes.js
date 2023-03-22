const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const { deleteModuloSchema, getModuloSchema, updateModuloSchema, createModuloSchema } = require('../schemas/Modulo,schema');
const ModuloService = require('../services/Modulo.service');
const router = express.Router();
const service = new ModuloService


router.get('/', async(req, res, next) => {
        try {
            const modulos = await service.find();
            res.status(200).json(modulos)
        } catch (error) {
            next(error)
        }
});

router.get('/:id_modulo',
    validatorHandler(getModuloSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id_modulo} = req.params;
            const modulo = await service.findOne(id_modulo);
            res.status(200).json(modulo);
        } catch (error) {
            next(error)
        }
    }
)
router.post('/',
validatorHandler(createModuloSchema, 'body'),
    async(req, res, next) => {
        try {
            const body = req.body;
            const newModelo = await service.create(body);
            res.status(200).json(newModelo);
        } catch (error) {
            next(error)
        }
})

router.patch('/:id_modulo',
validatorHandler(getModuloSchema, 'params'),
validatorHandler(updateModuloSchema, 'body'),
    async(req, res, next) => {
        try {
            const {id_modulo} = req.params;
            const body = req.body;
            const modulo = await service.update(id_modulo, body);
            res.status(200).json(modulo)
        } catch (error) {
            next(error)
        }
    }
)
router.delete('/:id_modulo',
validatorHandler(deleteModuloSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id_modulo} = req.params;
            await service.delete(id_modulo);
            res.status(200).json({id_modulo})
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router;