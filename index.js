const cron = require('node-cron');
const winston = require('winston');
const { CidadeRepository } = require('./repositorios/CidadeRepository');
const { DadosClimaticosRepository } = require('./repositorios/DadosClimaticosRepository');
const ColetorDadosClimaticos = require('./services/ColetorDadosClimaticos');

// Configuração do logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

(async () => {
    try {
        const cidadeRepository = new CidadeRepository();
        const dadosClimaticosRepository = new DadosClimaticosRepository();
        const coletorDadosClimaticos = new ColetorDadosClimaticos('a32ab3e7cbaf8e647480af281fbf4caa');

        async function executarAtualizacao(nomeCidade, intervalo) {
            try {
                const cidade = await cidadeRepository.buscarPorNome(nomeCidade);
                if (cidade) {
                    const dadosClimaticos = await coletorDadosClimaticos.coletarDadosClimaticos(cidade);
                    await dadosClimaticosRepository.salvar(dadosClimaticos);
                    logger.info(`Dados climáticos de ${nomeCidade} atualizados e salvos com sucesso (${intervalo}).`);
                } else {
                    logger.warn(`Cidade ${nomeCidade} não encontrada (${intervalo}).`);
                }
            } catch (error) {
                logger.error(`Erro ao coletar ou salvar dados climáticos de ${nomeCidade} (${intervalo}): ${error.message}`);
            }
        }

        // Atualização semanal
        cron.schedule('0 0 * * 0', async () => {
            await executarAtualizacao('Campo Grande', 'semanal');
        });

        // Atualização quinzenal (a cada 15 dias)
        cron.schedule('0 0 1,15 * *', async () => {
            await executarAtualizacao('Campo Grande', 'quinzenal');
        });

        // Atualização mensal
        cron.schedule('0 0 1 * *', async () => {
            await executarAtualizacao('Campo Grande', 'mensal');
        });

        // Atualização semestral
        cron.schedule('0 0 1 1,7 *', async () => {
            await executarAtualizacao('Campo Grande', 'semestral');
        });

        logger.info('atualizações agendados com sucesso para atualização semanal, quinzenal, mensal e semestral.');

    } catch (error) {
        logger.error(`Erro ao agendar as atualizações: ${error.message}`);
    }
})();
