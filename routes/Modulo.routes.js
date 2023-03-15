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

router.get('/:id',
    validatorHandler(getModuloSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            const modulo = await service.findOne(id);
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

router.patch('/:id',
validatorHandler(getModuloSchema, 'params'),
validatorHandler(updateModuloSchema, 'body'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            const body = req.body;
            const modulo = await service.update(id, body);
            res.status(200).json(modulo)
        } catch (error) {
            next(error)
        }
    }
)
router.delete('/:id',
validatorHandler(getModuloSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            await service.delete(id);
            res.status(200).json(res)
        } catch (error) {
            next(error)
        }
    }
)

module.exports = router;