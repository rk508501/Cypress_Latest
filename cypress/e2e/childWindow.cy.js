/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {

  //https://demoqa.com/browser-windows

  it('opens a real window in the current test runner', () => {
    cy.visit('https://demoqa.com/browser-windows').then((win) => {
      cy.spy(win, 'open').as('open')
    })
    cy.get('#messageWindowButton').click()
    cy.get('@open')
      .should('have.been.calledWith', '', 'MsgWindow')
      .its('firstCall.returnValue')
      .then((childWindow) => {
        expect(childWindow.document.body.innerText).to.include('Knowledge')

      })
      .wait(1000)
      .invoke('close')
  })

})
