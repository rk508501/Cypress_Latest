const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    "video":false,
    "blockHosts":["www.google-analytics.com", "https://googleads.g.doubleclick.net/**/*"],
    "reporter": "cypress-junit-reporter",
    "reporterOptions": {
      "mochaFile": "cypress/results/junit/test-results.[hash].xml",
      "toConsole": true
    },

    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mochawesome, junit",
      "mochawesomeReporterOptions": {
        "reportDir": "mochawesome-report",
        "reportFilename": "report"
      },
      "junitReporterOptions": {
        "mochaFile": "cypress/results/test-results.[hash].xml",
        "toConsole": true
      }
    },
    setupNodeEvents(on, config) {
      //require("./cypress/support/dockerComoseGenerator")
    },
  },
});
