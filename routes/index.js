const express = require('express');


const moduloRouter = require('./Modulo.routes');
const rutaRouter = require('./Ruta.routes');
const servicioRouter = require('./Servicio.routes');
const personaRouter = require('./Persona.routes');
const firmaRouter = require('./Firma.routes');
const conceptoFirmaRouter = require('./ConceptoFirma.routes');

function routerApi(app){
    const router = express.Router();
    app.use('/api', router);
    router.use('/modulo',moduloRouter);
    router.use('/rutas', rutaRouter);
    router.use('/servicios',servicioRouter);
    router.use('/personas', personaRouter);
    router.use('/firmas', firmaRouter);
    router.use('/conceptoFirma', conceptoFirmaRouter);
};

module.exports = routerApi;