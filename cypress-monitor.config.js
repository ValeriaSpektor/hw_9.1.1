const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    specPattern: "**/monitor/*.js",
    baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com",
    projectId: "fs2ut8", // Добавляем projectId
    setupNodeEvents(on, config) {}
  },
  chromeWebSecurity: false,
  taskTimeout: 10000
});
