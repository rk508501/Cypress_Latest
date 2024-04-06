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
    "video": false,
    blockHosts: [
      'pagead2.googlesyndication.com',
      'www.googletagservices.com',
      'www.google.com',
      'securepubads.g.doubleclick.net',
      'www.gstatic.com',
      'cdn.ad.plus',
      'www.google-analytics.com',
    ],
    async setupNodeEvents(on, config) {

      cypressSplit(on, config)

      return config
    },
  },
});
