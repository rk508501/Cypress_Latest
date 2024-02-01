/// <reference types="cypress" />


describe('Testing AG Grid', () => {
    it("Sample POC", () => {
        cy.visit('https://www.ag-grid.com/example/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('div.ag-body-horizontal-scroll-viewport').scrollTo('right')
        cy.xpath('//*[@id="myGrid"]/div/div/div[2]/div[2]/div[3]/div[1]/div/div/div/div/div').map('innerText').print()

    })
})