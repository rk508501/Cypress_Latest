describe("B", ()=>{
    it("B - 1", ()=>{
        cy.log("First test passed")
            cy.visit("https://www.google.com/")
        expect(true).to.be.true
    })
})
