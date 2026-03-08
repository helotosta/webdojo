const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true, //habilitar project settings
    // defaultCommandTimeout: 10000 //configuração de timeout padrão (4000) do cypress
    video: true, //recurso utilizado para gravar os testes de regressao
    baseUrl: 'http://localhost:3000'
  },
});
