const express = require('express');
const router = express.Router();
const {UsuarioRepository} = require('../repositorios/UsuarioRepository');

router.get('/test', (req, res) => {
    res.send('deu certo');
})
router.post('/add', (req, res) => {
    let {nome, atualizacoes} = req.body;
    let Usuario = new UsuarioRepository();
    Usuario.create({
        nome,
        atualizacoes
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
})
router.delete('/deleteByID', async (req, res) => {
    try {
        const { id } = req.body; 
        let Usuario = new UsuarioRepository();
        await Usuario.deleteByID(id);
        res.send('Usuário deletado com sucesso');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar usuário');
    }
});


module.exports = router