const xml2js = require('xml2js');
const fs = require('fs');

const parser = new xml2js.Parser();

fs.readFile('cypress\\support\\bookstore.xml', 'utf8', (err, xmlData) => {
  if (err) {
    console.error(err);
    return;
  }

  parser.parseString(xmlData, (err, jsonData) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(JSON.stringify(jsonData, null, 2)); // Pretty-print the JSON
  });
});