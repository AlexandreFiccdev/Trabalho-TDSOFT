const { sequelize } = require('./database');
const { DadosClimaticosModel } = require('./repositorios/DadosClimaticosRepository');

(async () => {
    try {
      console.log('Tentando conectar ao banco de dados...');
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  
      const dadosRecentes = await DadosClimaticosModel.findAll({
        limit: 10,
        order: [['timestamp', 'DESC']]
      });
  
      if (dadosRecentes.length > 0) {
        console.log('Dados climáticos mais recentes:');
        dadosRecentes.forEach(dado => {
          console.log(dado.toJSON());
        });
      } else {
        console.log('Nenhum dado climático encontrado.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o banco de dados ou buscar dados:', error);
    } finally {
      await sequelize.close();
    }
  })();
