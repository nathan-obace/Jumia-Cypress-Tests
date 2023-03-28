const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "be2sbv",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
