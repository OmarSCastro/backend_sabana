const { ModuloSchema, Modulo } = require("./Modulo.model");
const { RutaSchema, Ruta } = require("./Ruta.model");
const { ServicioSchema, Servicio } = require("./Servicio.model");


function setupModels(sequelize){
    Modulo.init(ModuloSchema, Modulo.config(sequelize));
    Ruta.init(RutaSchema, Ruta.config(sequelize));
    Servicio.init(ServicioSchema, Servicio.config(sequelize));

    Modulo.associate(sequelize.models);
    Ruta.associate(sequelize.models);
    Servicio.associate(sequelize.models);
};

module.exports = setupModels