class Cidade {
    constructor(id, nome, coordenadas) {
      this.id = id;
      this.nome = nome;
      this.coordenadas = coordenadas;
    }
  }
  
  class CoordenadasGeograficas {
    constructor(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  
  module.exports = { Cidade, CoordenadasGeograficas };
  