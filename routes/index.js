const express = require('express');


const moduloRouter = require('./Modulo.routes');
const rutaRouter = require('./Ruta.routes');
const srvicioRouter = require('./Servicio.routes');

function routerApi(app){
    const router = express.Router();
    app.use('/api', router);
    router.use('/modulo',moduloRouter);
    router.use('/rutas', rutaRouter);
    router.use('/servicios',srvicioRouter);
};

module.exports = routerApi;