const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const { DadosClimaticosModel } = require('./model/DadosClimaticosModel')(sequelize);
const { CidadesModel } = require('./model/CidadesModel')(sequelize);
const { UsuariosModel} = require('./model/UsuariosModel')(sequelize);

sequelize.sync();

module.exports = {
    sequelize,
    CidadesModel,
    DadosClimaticosModel,
    UsuariosModel,
};
