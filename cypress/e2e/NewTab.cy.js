describe("New Tab", () => {
  // it("Stub", () => {
  //   cy.visit("http://127.0.0.1:5500/cypress/HTML/NewTabBtn.html").then(win => {
  //     cy.stub(win, 'open').as("newTab")
  //   })
  //   cy.get('button').click()
  //   cy.get('@newTab').should('have.been.calledWith', "https://google.ca")
  // });

  it("Spy", () => {
    cy.visit("https://demoqa.com/browser-windows").then(win => {
      cy.spy(win, 'open').as("newTab")

    })
    cy.get('#windowButton').click()
    cy.get('@newTab')
      .its('firstCall.args')
      .then((args) => {
        cy.log(args)
      }) 
      
     cy.get('@newTab')
     .its('firstCall.returnValue')
     .then(childWindow =>{
        expect(childWindow.document.body.innerText).contains('')
     })
     .invoke('close')
  });


});