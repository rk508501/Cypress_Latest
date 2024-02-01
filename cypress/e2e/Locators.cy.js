describe("Debug", ()=>
{
    it("Locators", ()=>{
        cy.visit("https://www.ag-grid.com/example/")

        //Cookies
        cy.wait(5_000)
        cy.get('#onetrust-reject-all-handler').should(Cypress._.noop).then(element =>{
            if(element.length > 0){
                cy.log("Cookies prompted")
                cy.get('#onetrust-reject-all-handler').click()
            }else{
                cy.log("No cookies prompted")
            }
        })
    })
})