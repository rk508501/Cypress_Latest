const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
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
    "reporter": 'junit',
    "reporterOptions": {
      "mochaFile": 'JUnit_Result.xml',
      "toConsole": true,
    },
    async setupNodeEvents(on, config) {

      cypressSplit(on, config)

      //require("./cypress/support/dockerComoseGenerator")
      on('task', {
        xmlToJson(filePath) {
          return new Promise((resolve, reject) => {
            const xml2js = require('xml2js');
            const fs = require('fs');

            fs.readFile(filePath, 'utf8', (err, xmlData) => {
              if (err) {
                reject(err);
                return;
              }

              const parser = new xml2js.Parser();
              parser.parseString(xmlData, (err, jsonData) => {
                if (err) {
                  reject(err);
                  return;
                }

                resolve(jsonData);
              });
            });
          });
        },
      });

      return config
    },
  },
});
