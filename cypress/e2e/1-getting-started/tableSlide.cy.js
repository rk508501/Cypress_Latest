describe('Test', () => {
    it('Test', () => {
        cy.visit('https://mdbootstrap.com/docs/b4/jquery/tables/scroll/')

        cy.get('#datatable-vertical-dynamic-height > .section-no-border > section > .bg-white > .p-4').scrollIntoView()

        cy.get('#dtHorizontalExample_wrapper > :nth-child(2) > .col-sm-12 > .dataTables_scroll > .dataTables_scrollBody').scrollTo('right')

        //Conditional check
        cy.get('.secondary-heading').should(Cypress._.noop).its('length').then(l =>{
            if(l > 0){
                cy.log("Element found")
            }else{
                cy.log("Failed to find the element")
            }
        })


    })
})