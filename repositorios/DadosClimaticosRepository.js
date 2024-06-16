const { DadosClimaticosModel } = require('../database/database');

class DadosClimaticosRepository {
  async salvar(dadosClimaticos) {
    await DadosClimaticosModel.create({ ...dadosClimaticos });
  }
}

module.exports = { DadosClimaticosRepository };
