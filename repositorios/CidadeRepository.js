const { Cidade, CoordenadasGeograficas } = require('../entidades/Cidade');
const { CidadesModel } = require('../database/database');

class CidadeRepository {
  async buscarPorNome(nome) {
    return {
      coordenadas: {
          latitude: -20.4809196,
          longitude: -54.7179347,
      }
  };
    const cidade = await CidadesModel.findOne({ where: { nome } });
    if (cidade) {
      const data = cidade.dataValues;
      return new Cidade(data.nome, new CoordenadasGeograficas(data.latitude, data.longitude));
    
    }
    return null;
  }

  async buscarPorCoordenadas(coordenadas) {
    const cidade = await CidadesModel.findOne({ where: { latitude: coordenadas.latitude, longitude: coordenadas.longitude } });
    if (cidade) {
      const data = cidade.dataValues;
      return new Cidade(data.nome, new CoordenadasGeograficas(data.latitude, data.longitude));
    }
    return null;
  }
}

module.exports = { CidadeRepository };
