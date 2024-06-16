const express = require('express');
const app = express();
const { sequelize } = require('./database/database');  
const bodyParser = require('body-parser')


const PORT = 3000;

app.listen(PORT, function(){
    console.log('O Express está rodando na porta 3000');
});

app.use(bodyParser.urlencoded({ extended: false}))

sequelize
.authenticate()
.then(() => {
    console.log("Conectou ao banco de dados");
}).catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
});

app.get('/', (req, res) => {
    res.send("Está funcionando");
});

app.use('/Usuarios', require('./routers/Usuarios'));
