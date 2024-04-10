const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    "video":false,
    "blockHosts":["www.google-analytics.com", "https://googleads.g.doubleclick.net/**/*"],
    setupNodeEvents(on, config) {
      //require("./cypress/support/dockerComoseGenerator")
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },
});
