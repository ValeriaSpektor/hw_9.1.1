const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    specPattern: "**/laptop/*.js",
    baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com",
    projectId: "fs2ut8", // Добавляем projectId
    setupNodeEvents(on, config) {}
  }
});
