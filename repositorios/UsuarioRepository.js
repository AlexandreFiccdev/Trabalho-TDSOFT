const { UsuariosModel } = require('../database/database');

class UsuarioRepository {
  async create(usuario) {
    await UsuariosModel.create({ ...usuario });
  }

  async deleteByID(id) {
    await UsuariosModel.destroy({
        where: {
            id: id
        }
    });
    }
}

module.exports = { UsuarioRepository };
