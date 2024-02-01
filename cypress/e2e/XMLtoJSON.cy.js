it("XML to JSON", function () {
    cy.task('xmlToJson', "cypress/support/bookstore.xml").then((jsonData) => {
        // Access the converted JSON data here
        cy.log('Converted JSON:', JSON.stringify(jsonData, null, 2));
    });
})
