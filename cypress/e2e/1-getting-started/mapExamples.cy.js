


describe("Testing cy-map", () => {
    it("Test map", () => {

        let names = ["Brad", "Smith", "Matt", "Wilmer"]

        cy.wrap(names).mapChain(name => cy.request(`https://api.genderize.io/?name=${name}`)).then(results => {
            results.forEach(result => {
                cy.log(JSON.stringify(result.body))
            })
        })
    })
})