const { DataTypes } = require('sequelize');

let DadosClimaticosModel = null;

module.exports = (sequelize) => {
    if (DadosClimaticosModel === null) {
        DadosClimaticosModel = sequelize.define('DadosClimaticos', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            temperatura: { type: DataTypes.FLOAT  },
            umidade: { type: DataTypes.FLOAT },
            velocidadeVento: { type: DataTypes.FLOAT },
            pressao: { type: DataTypes.FLOAT },
            timestamp: { type: DataTypes.DATE },
        });
    }

    return { DadosClimaticosModel }
};
