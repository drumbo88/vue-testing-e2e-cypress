// https://docs.cypress.io/api/table-of-contents

const { createYield } = require("typescript")

// describe('My First Test', () => {
//   it('Visits the app root url', () => {
//     cy.visit('/')
//     cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App')
//   })
// })

/*describe('Test Name', () => {
    // Test execution
    it('Example name', () => {
        cy.visit('/') // Visita URL
        cy.url() // Obtiene URL actual
        cy.contains('h1', 'Title text') // TAG contiene texto
        cy.should('contains', 'hello cypress')
        cy.should('have.css', 'color', '#ff0000')
        cy.request('POST', 'URI', {})
        cy.get('.class')
        cy.get('#id')
        cy.get('[data-test-id]="myId"')
        cy.click() // Acción click
        cy.type('username') // Acción escribir en input
    })
})*/

describe('Counter Feature', () => {
    it('User can access to page', () => {
        cy.visit('/counter')
        cy.contains('h1', 'Counter App')
    })
    it('User can increment counter', () => {
        cy.visit('/counter')
        cy.get('#counter-info').contains('0')
        cy.contains('button', 'Increment').click()
        cy.get('#counter-info').contains('1')
    })
})