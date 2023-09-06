describe('Post Test', () => {
    it('Logged user can access to page and view the posts list.', () => {
        cy.visit('/login')
        cy.get('input[type="text"]').type('admin@admin.com')
        cy.get('input[type="password"]').type('12345678') // valid credential
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:8080/') // sent to home (protected)
        cy.contains('h1', 'Posts List')
        cy.contains('sunt aut facere repellat') // post 1
    })
    it('Logged user can access to detail post view.', () => {
        cy.visit('/login')
        cy.get('input[type="text"]').type('admin@admin.com')
        cy.get('input[type="password"]').type('12345678') // valid credential
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:8080/') // sent to home (protected)

        cy.contains('h1', 'Posts List')
        cy.contains('sunt aut facere repellat').click() // post 1 title
        cy.url().should('eq', 'http://localhost:8080/detail/1')
        //cy.contains('quia et suscipit\nsuscipit recusandae') // scape character \n must be an space
        cy.contains('quia et suscipit suscipit recusandae') // post 1 body
    })
    it('Logged user can go back from detail post view.', () => {
        cy.visit('/login')
        cy.get('input[type="text"]').type('admin@admin.com')
        cy.get('input[type="password"]').type('12345678') // valid credential
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:8080/') // sent to home (protected)

        cy.contains('h1', 'Posts List')
        cy.contains('sunt aut facere repellat').click() // post 1 title
        cy.url().should('eq', 'http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae') // post 1 body

        cy.contains('Volver atrás').click()
        cy.url().should('eq', 'http://localhost:8080/') // sent to home
        cy.contains('h1', 'Posts List')
    })
})