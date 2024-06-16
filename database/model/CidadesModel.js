const { DataTypes } = require('sequelize');

let CidadesModel = null;

module.exports = (sequelize) => {
    if (CidadesModel === null) {
        CidadesModel = sequelize.define('Cidade', {
            nome: { type: DataTypes.STRING, allowNull: false },
            latitude: { type: DataTypes.FLOAT, allowNull: false },
            longitude: { type: DataTypes.FLOAT, allowNull: false },
          });
    }

    return { CidadesModel }
};
