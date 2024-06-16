class DadosClimaticos {
    constructor(temperatura, umidade, velocidadeVento, pressao, timestamp) {
      this.temperatura = temperatura;
      this.umidade = umidade;
      this.velocidadeVento = velocidadeVento;
      this.pressao = pressao;
      this.timestamp = timestamp;
    }
  }
  
  module.exports = { DadosClimaticos };
  