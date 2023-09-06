// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

Cypress.Commands.add("login", (email, password) => {
    cy.visit('/login')
    cy.get('input[type="text"]').type(email)
    cy.get('input[type="password"]').type(password) // valid credential
    cy.get('button').click()
    // cy.url().should('eq', 'http://localhost:8080/')  // Aquí no verifico, ya que puede ser válido o no
})
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
