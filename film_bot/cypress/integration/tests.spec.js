// tests.spec.js created with Cypress


describe('first test', () => {
	
	it('visits fb page', () => {
		cy.visit('https://www.facebook.com/Testing_bots-108787575008296')
		cy.get('button').contains('Only Allow Essential Cookies').click()
		cy.reload()
		
		
	})

	it('logs in with facebook account', () => {
		const email = 'ns539@canterbury.ac.uk';
		const password = 'pr0jectT3st';
		
		
		cy.get('button').contains('Log In').click
		cy.get('input[email=').type(email)
		
		cy.get('input[pass=').type(password)

	}) 
}) 


describe('random tests', () => {
	it('tests fully random run', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		cy.contains('Movie data is taken from https://www.themoviedb.org/').should('exist')
		cy.contains('Welcome, type genre and then the genre you would like to watch to begin').should('exist')
		cy.contains('Alternatively, type "random" to get a random recommendation').should('exist')
		cy.contains('Aa').click().type('random').type({enter})
		cy.contains('Title: ').should('exist')
	})

		
		
	it('specific genre random film', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		
		cy.contains('Movie data is taken from https://www.themoviedb.org/').should('exist')
		cy.contains('Welcome, type genre and then the genre you would like to watch to begin').should('exist')
		cy.contains('Alternatively, type "random" to get a random recommendation').should('exist')
		
		cy.contains('Aa').click().type('genre comedy').type({enter})
		cy.contains('What is the maximum length of film?').should('exist')
		
		cy.contains('Aa').click().type('random').type({enter})
		cy.contains('Title: ').should('exist')
	})
		
	it('specific genre and length random film', () => {
		cy.contains('Aa').click().type('hello').type({enter})
	
		cy.contains('Movie data is taken from https://www.themoviedb.org/').should('exist')
		cy.contains('Welcome, type genre and then the genre you would like to watch to begin').should('exist')
		cy.contains('Alternatively, type "random" to get a random recommendation').should('exist')
		
		cy.contains('Aa').click().type('genre comedy').type({enter})
		cy.contains('What is the maximum length of film?').should('exist')
		
		cy.contains('Aa').click().type('120').type({enter})
		cy.contains('Ok, the length will be').should('exist')
	
		cy.contains('Aa').click().type('random').type({enter})
		cy.contains('Title: ').should('exist')
	})
	
})

describe('genre validation tests', () => {
	it('validGenreWithoutPrefix', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		
		
		
		cy.contains('Aa').click().type('crime').type({enter})
		cy.contains('Invalid genre. Remember to state : genre {name of genre}').should('exist')
	})
	
	it('invalid genre without prefix', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		
		
		
		cy.contains('Aa').click().type('banana').type({enter})
		cy.contains('Invalid genre. Remember to state : genre {name of genre}').should('exist')
	})
	
	it('valid genre with prefix', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		
		cy.contains('Aa').click().type('genre crime').type({enter})
		cy.contains('What is the maximum length of film?').should('exist')
		
	})
	it('invalid genre with prefix', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		
		cy.contains('Aa').click().type('genre banana').type({enter})
		cy.contains('Invalid genre. Remember to state : genre {name of genre}').should('exist')
	})
})
	
describe('length tests', () => {
	it('wrong data type', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		
		cy.contains('Aa').click().type('genre music').type({enter})
		
		cy.contains('Aa').click().type('word').type({enter})
		cy.contains('Invalid length').should('exist')
		
	})
	it('minimum value', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		cy.contains('Aa').click().type('genre music').type({enter})
		cy.contains('Aa').click().type('1').type({enter})
		cy.contains('Ok, the length will be 1').should('exist')
		
	})
	it('below minimum value', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		cy.contains('Aa').click().type('genre music').type({enter})
		cy.contains('Aa').click().type('0').type({enter})
		cy.contains('Invalid length').should('exist')
		
	})
	it('nominal value', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		cy.contains('Aa').click().type('genre music').type({enter})
		cy.contains('Aa').click().type('120').type({enter})
		cy.contains('Ok, the length will be 120').should('exist')
		
	})
})
	
describe('tests for actor', () => {
	it('all data valid', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		cy.contains('Aa').click().type('genre war').type({enter})
		cy.contains('Aa').click().type('110').type({enter})
		cy.contains('Aa').click().type('Tom Hardy').type({enter})
		cy.contains('Ok, I will look for films starring Tom Hardy').should('exist')
		
	})
	it('invalid value', () => {
		cy.contains('Aa').click().type('hello').type({enter})
		cy.contains('Aa').click().type('genre music').type({enter})
		cy.contains('Aa').click().type('word').type({enter})
		cy.contains('Aa').click().type('789g43').type({enter})
		cy.contains("Sorry, couldn't find a film that matches that criteria").should('exist')
	})
})
