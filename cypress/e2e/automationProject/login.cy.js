
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
 
 describe('Login', () => {
      beforeEach(() => {
          cy.visit("https://newbeta.herconomy.com/")
          
      })
    
      it('allows a user to log in with valid credentials', () => {
        cy.get('input[name="email"]').type('sultan@assurdly.com')
        cy.get('input[name="password"]').type('Test419$')
        cy.get('.btn-multiple-state').click()
      })
    
      it('displays an error message for invalid credentials', () => {
        cy.get('input[name="email"]').type('sultan@assurdly.com')
        cy.get('input[name="password"]').type('Password123%')
        cy.get('.btn-multiple-state').click()
    
        cy.contains('Invalid login credentials')
      })
    
      it('displays an error message when required fields are left blank', () => {
        cy.get('.btn-multiple-state').click()
    
        cy.contains('Please enter your email address')
        cy.contains('Please enter your password')
      })
    
      it('displays an error message for password length requirement', () => {
        cy.get('input[name="email"]').type('sultan@assurdly.com')
        cy.get('input[name="password"]').type('hello')
        cy.get('.btn-multiple-state').click()
    
        cy.contains('Invalid login credentials')
      })
    })
    