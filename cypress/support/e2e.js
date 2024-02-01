
// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-map'
import 'cypress-ag-grid'
require('@cypress/xpath');
import 'cypress-aliases'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    // you can also add a Debugger here to analyze the error
    debugger;
    return false;
});