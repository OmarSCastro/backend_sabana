const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const { createServicioSchema, deleteServicioSchema, getServicioSchema, updateServicioSchema } = require('../schemas/Servicio.schema');
const ServicioService = require('../services/Servicio.service');
const router = express.Router();
const service = new ServicioService


router.get('/', async(req, res, next) => {
        try {
            const servicios = await service.find();
            res.status(200).json(servicios)
        } catch (error) {
            next(error)
        }
});

router.get('/:id',
    validatorHandler(getServicioSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            const servicio = await service.findOne(id);
            res.status(200).json(servicio);
        } catch (error) {
            next(error)
        }
    }
)
router.post('/',
validatorHandler(createServicioSchema, 'body'),
    async(req, res, next) => {
        try {
            const body = req.body;
            const newServicio = await service.create(body);
            res.status(200).json(newServicio);
        } catch (error) {
            next(error)
        }
})

router.patch('/:id',
validatorHandler(getServicioSchema, 'params'),
validatorHandler(updateServicioSchema, 'body'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            const body = req.body;
            const servicio = await service.update(id, body);
            res.status(200).json(servicio)
        } catch (error) {
            next(error)
        }
    }
)
router.delete('/:id',
validatorHandler(getServicioSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            await service.delete(id);
            res.status(200).json({id})
        } catch (error) {
            next(error)
        }
    }
)



module.exports = router;