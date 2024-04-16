const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    specPattern: "**/laptop/*.js", // указываем путь к тестам для лэптопа
    baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com",
    setupNodeEvents(on, config) {}
  }
});
