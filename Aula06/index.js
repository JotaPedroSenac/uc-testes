const express = require('express');
const { sequelize } = require('./src/config/configDB');
require('dotenv').config();
const produtoRoutes = require('./src/modules/produto/routes/produtoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/produtos', produtoRoutes);

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Aplicação rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
}

main();

module.exports = app;
