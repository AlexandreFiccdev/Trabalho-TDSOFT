const axios = require('axios');
const { DadosClimaticos } = require('../entidades/DadosClimaticos');

class ColetorDadosClimaticos {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async coletarDadosClimaticos(cidade) {
    const { latitude, longitude } = cidade.coordenadas;
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`);
    const data = response.data;
    
    return new DadosClimaticos(
      data.main.temp,
      data.main.humidity,
      data.wind.speed,
      data.main.pressure,
      new Date(data.dt * 1000)
    );
  }
}

module.exports = ColetorDadosClimaticos;
