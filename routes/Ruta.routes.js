const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const { createRutaSchema, updateRutaSchema, getRutaSchema } = require('../schemas/Rutas.schema');
const RutaService = require('../services/Ruta.service');
const router = express.Router();
const service = new RutaService



router.get('/', async(req, res, next) => {
        try {
            const rutas = await service.find();
            res.status(200).json(rutas)
        } catch (error) {
            next(error)
        }
});

router.get('/:id',
    validatorHandler(getRutaSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            const ruta = await service.findOne(id);
            res.status(200).json(ruta);
        } catch (error) {
            next(error)
        }
    }
)
router.post('/',
validatorHandler(createRutaSchema, 'body'),
    async(req, res, next) => {
        try {
            const body = req.body;
            const newRuta = await service.create(body);
            res.status(200).json(newRuta);
        } catch (error) {
            next(error)
        }
})

router.patch('/:id',
validatorHandler(getRutaSchema, 'params'),
validatorHandler(updateRutaSchema, 'body'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            const body = req.body;
            const ruta = await service.update(id, body);
            res.status(200).json(ruta)
        } catch (error) {
            next(error)
        }
    }
)
router.delete('/:id',
validatorHandler(getRutaSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            await service.delete(id);
            res.status(200).json(id)
        } catch (error) {
            next(error)
        }
    }
)


module.exports = router;