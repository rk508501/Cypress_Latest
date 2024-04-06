const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'GitHub Actions for Cypress',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
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
      require('cypress-mochawesome-reporter/plugin')(on);

      cypressSplit(on, config)

      return config
    },
  },
});
