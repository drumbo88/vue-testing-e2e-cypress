describe('Login Test', () => {
    it('User can not access to protected route when is not logged in.', () => {
        // Intento visitar ruta protegida, y la url cambia a login
        cy.visit('/')
        cy.url().should('eq', 'http://localhost:8080/login')
    })

    it('User with wrong credentials can not log in.', () => {
        // Intento visitar ruta protegida, y la url cambia a login
        cy.login('admin@admin.com', 'qwerty') // wrong credential
        cy.contains('p', 'Wrong user or password')
        // Intento visitar ruta protegida, y la url cambia a login (test anterior)
        cy.visit('/')
        cy.url().should('eq', 'http://localhost:8080/login')
    })
    it('User can login successfully.', () => {
        cy.login('admin@admin.com', '12345678') // valid credential
        cy.url().should('eq', 'http://localhost:8080/') // sent to home (protected)
    })
})