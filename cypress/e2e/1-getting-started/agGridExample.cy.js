/// <reference types="cypress" />


describe('Testing AG Grid', () => {
    it("Sample POC", () => {
        cy.visit("https://ui.vuestic.dev/extensions/ag-grid")
        cy.get('[comp-id="332"]').scrollIntoView()
        cy.xpath('//*[@id="__nuxt"]/div/section/main/article/div/div[11]/div[1]/div/div/div/div/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div[3]/div')
            .map('innerText')
            .print()
        
        cy.xpath('//*[@id="__nuxt"]/div/section/main/article/div/div[11]/div[1]/div/div/div/div/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div/div')
            .map('innerText')
            .print()
    })
})