// tests.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('first test', () => {
	it('visits fb page ', () => {
		cy.visit('https://www.facebook.com/Testing_bots-108787575008296')
		cy.get('button').contains('Only Allow Essential Cookies').click()
		cy.reload()
		
		
	})

	it('logs in with facebook account', () => {
		//const email
		//const password
		
		
		cy.get('button').contains('Log In').click
		//cy.get('input[email=').type(email)
		
		//cy.get('input[pass=').type(password)
	})
}) 
