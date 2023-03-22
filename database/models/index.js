const { Firma, FirmaSchema } = require("./firma.model");
const { ModuloSchema, Modulo } = require("./Modulo.model");
const { Persona, PersonaSchema } = require("./personas.model");
const { RutaSchema, Ruta } = require("./Ruta.model");
const { ServicioSchema, Servicio } = require("./Servicio.model");


function setupModels(sequelize){
    Modulo.init(ModuloSchema, Modulo.config(sequelize));
    Ruta.init(RutaSchema, Ruta.config(sequelize));
    Servicio.init(ServicioSchema, Servicio.config(sequelize));
    Persona.init(PersonaSchema, Persona.config(sequelize));
    Firma.init(FirmaSchema, Firma.config(sequelize));


    Modulo.associate(sequelize.models);
    Ruta.associate(sequelize.models);
    Servicio.associate(sequelize.models);
    Persona.associate(sequelize.models);
    Firma.associate(sequelize.models);
};

module.exports = setupModels