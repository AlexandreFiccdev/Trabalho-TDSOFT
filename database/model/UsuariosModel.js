const { DataTypes } = require('sequelize');

let UsuariosModel = null;

module.exports = (sequelize) => {
    if (UsuariosModel === null) {
        UsuariosModel = sequelize.define('Usuario', {
            nome: { type: DataTypes.STRING, allowNull: false },
            atualizacoes: { type: DataTypes.STRING, allowNull: false },
          });
    }

    return { UsuariosModel }
};
