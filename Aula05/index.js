const express = require('express');
const {sequelize} = require('./src/config/configDB');
require('dotenv').config();
console.log('Senha (valor):', process.env.DB_PASSWORD);
console.log('Senha (tipo):', typeof process.env.DB_PASSWORD);
console.log('Senha (valor):', process.env.DB_PASSWORD);


const app = express();
const port = process.env.PORT;
app.use(express.json());
require('./src/modules/produto/models/produtoModel');


sequelize.sync()
  .then(async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
      
      app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
      });
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
    }
  })
  .catch((syncError) => {
    console.error('Erro ao sincronizar com o banco de dados:', syncError);
  });