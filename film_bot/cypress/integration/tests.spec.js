// tests.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('first test', () => {
	const prelimTests = {
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

	}) }
}) 


describe('random tests' () => {
	it('tests fully random run', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('random').type({enter})
	}
		
		
	it('specific genre random film' () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre comedy').type({enter})
		cy.contains('Aa'.click().type('random').type({enter})
	}
		
	it('specific genre and length random film' () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre comedy').type({enter})
		cy.contains('Aa'.click().type('120').type({enter})
		cy.contains('Aa'.click().type('random').type({enter})
	}
	
}

describe('gnere validation tests' () => {
	it('validGenreWithoutPrefix', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('crime').type({enter})
	}
	
	it('invalid genre without prefix', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('banana').type({enter})
	}
	
	it('valid genre with prefix', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre crime').type({enter})
		
	}
	it('invalid genre with prefix', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre banana').type({enter})
		
	}
	
describe('length tests' () => {
	it('wrong data type', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre music').type({enter})
		cy.contains('Aa'.click().type('word').type({enter})
		
	}
	it('minimum value', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre music').type({enter})
		cy.contains('Aa'.click().type('1').type({enter})
		
	}
	it('below minimum value', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre music').type({enter})
		cy.contains('Aa'.click().type('0').type({enter})
		
	}
	it('nominal value', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre music').type({enter})
		cy.contains('Aa'.click().type('120').type({enter})
		
	}
	
describe('tests for actor' () => {
	it('all data valid', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre war').type({enter})
		cy.contains('Aa'.click().type('110').type({enter})
		cy.contains('Aa'.click().type('Tom Hardy').type({enter})
		
	}
	it('invalid value', () => {
		cy.contains('Aa'.click().type('hello').type({enter})
		cy.contains('Aa'.click().type('genre music').type({enter})
		cy.contains('Aa'.click().type('word').type({enter})
		cy.contains('Aa'.click().type('789g43').type({enter})
	}