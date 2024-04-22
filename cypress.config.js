const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fs2ut8',
  e2e: {
    setupNodeEvents(on, config) {
      // Используйте допустимое событие, например, after:run
      on('after:run', (results) => {
        // Ваша логика после завершения тестов
      });
    },
  },
});
