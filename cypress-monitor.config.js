const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    specPattern: "**/monitor/*.js", // указываем путь к тестам для монитора
    projectId: "fs2ut8",
    baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com",
    setupNodeEvents(on, config) {
      // реализация обработчиков событий узла здесь
    },
  },
  chromeWebSecurity: false,
  taskTimeout: 10000
});
