


describe("Testing cy-map", () => {
    it("HYER-9 Test Cy Integration", () => {

        let names = ["Brad", "Smith", "Matt", "Wilmer"]

        cy.wrap(names).mapChain(name => cy.request(`https://api.genderize.io/?name=${name}`)).then(results => {
            results.forEach(result => {
                cy.log(JSON.stringify(result.body))
            })
            expect(true).to.be.true
        })
    })
})