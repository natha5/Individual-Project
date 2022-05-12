// tests.spec.js created with Cypress


describe('first test', () => {
	
	it('visits fb page', () => {
		cy.visit('https://www.facebook.com/Testing_bots-108787575008296')
		cy.contains('Only Allow Essential Cookies').click()
	
		
		
	})

	it('logs in with facebook account', () => {
		const email = 'nathan.j.shuttleworth@gmail.com';
		const password = 'serve45';
		
		
		
		cy.contains('Email or phone').click().type(email)
		
		cy.contains('Password').click().type(password)
		cy.contains('Log in').click()

	}) 
}) 


describe('random tests', () => {
	it('tests fully random run', () => {
		cy.contains('Aa').click().type('hello{enter}')
		cy.contains('Movie data is taken from https://www.themoviedb.org/').should('exist')
		cy.contains('Welcome, type genre and then the genre you would like to watch to begin').should('exist')
		cy.contains('Alternatively, type "random" to get a random recommendation').should('exist')
		cy.contains('Aa').click().type('random{enter}')
		cy.contains('Title: ').should('exist')
	})

		
		
	it('specific genre random film', () => {
		cy.contains('Aa').click().type('hello{enter}')
		
		cy.contains('Movie data is taken from https://www.themoviedb.org/').should('exist')
		cy.contains('Welcome, type genre and then the genre you would like to watch to begin').should('exist')
		cy.contains('Alternatively, type "random" to get a random recommendation').should('exist')
		
		cy.contains('Aa').click().type('genre comedy{enter}')
		cy.contains('What is the maximum length of film?').should('exist')
		
		cy.contains('Aa').click().type('random{enter}')
		cy.contains('Title: ').should('exist')
	})
		
	it('specific genre and length random film', () => {
		cy.contains('Aa').click().type('hello{enter}')
	
		cy.contains('Movie data is taken from https://www.themoviedb.org/').should('exist')
		cy.contains('Welcome, type genre and then the genre you would like to watch to begin').should('exist')
		cy.contains('Alternatively, type "random" to get a random recommendation').should('exist')
		
		cy.contains('Aa').click().type('genre comedy{enter}')
		cy.contains('What is the maximum length of film?').should('exist')
		
		cy.contains('Aa').click().type('120{enter}')
		cy.contains('Ok, the length will be').should('exist')
	
		cy.contains('Aa').click().type('random{enter}')
		cy.contains('Title: ').should('exist')
	})
	
})

describe('genre validation tests', () => {
	it('validGenreWithoutPrefix', () => {
		cy.contains('Aa').click().type('hello{enter}')
		
		
		
		cy.contains('Aa').click().type('crime{enter}')
		cy.contains('Invalid genre. Remember to state : genre {name of genre}').should('exist')
	})
	
	it('invalid genre without prefix', () => {
		cy.contains('Aa').click().type('hello{enter}')
		
		
		
		cy.contains('Aa').click().type('banana{enter}')
		cy.contains('Invalid genre. Remember to state : genre {name of genre}').should('exist')
	})
	
	it('valid genre with prefix', () => {
		cy.contains('Aa').click().type('hello{enter}')
		
		cy.contains('Aa').click().type('genre crime{enter}')
		cy.contains('What is the maximum length of film?').should('exist')
		
	})
	it('invalid genre with prefix', () => {
		cy.contains('Aa').click().type('hello{enter}')
		
		cy.contains('Aa').click().type('genre banana{enter}')
		cy.contains('Invalid genre. Remember to state : genre {name of genre}').should('exist')
	})
})
	
describe('length tests', () => {
	it('wrong data type', () => {
		cy.contains('Aa').click().type('hello{enter}')
		
		cy.contains('Aa').click().type('genre music{enter}')
		
		cy.contains('Aa').click().type('word{enter}')
		cy.contains('Invalid length').should('exist')
		
	})
	it('minimum value', () => {
		cy.contains('Aa').click().type('hello{enter}')
		cy.contains('Aa').click().type('genre music{enter}')
		cy.contains('Aa').click().type('1{enter}')
		cy.contains('Ok, the length will be 1').should('exist')
		
	})
	it('below minimum value', () => {
		cy.contains('Aa').click().type('hello{enter}')
		cy.contains('Aa').click().type('genre music{enter}')
		cy.contains('Aa').click().type('0{enter}')
		cy.contains('Invalid length').should('exist')
		
	})
	it('nominal value', () => {
		cy.contains('Aa').click().type('hello{enter}')
		cy.contains('Aa').click().type('genre music{enter}')
		cy.contains('Aa').click().type('120{enter}')
		cy.contains('Ok, the length will be 120').should('exist')
		
	})
})
	
describe('tests for actor', () => {
	it('all data valid', () => {
		cy.contains('Aa').click().type('hello{enter}')
		cy.contains('Aa').click().type('genre war{enter}')
		cy.contains('Aa').click().type('110{enter}')
		cy.contains('Aa').click().type('Tom Hardy{enter}')
		cy.contains('Ok, I will look for films starring Tom Hardy').should('exist')
		
	})
	it('invalid value', () => {
		cy.contains('Aa').click().type('hello{enter}')
		cy.contains('Aa').click().type('genre music{enter}')
		cy.contains('Aa').click().type('word{enter}')
		cy.contains('Aa').click().type('789g43{enter}')
		cy.contains("Sorry, couldn't find a film that matches that criteria").should('exist')
	})
})
