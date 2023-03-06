/// reference types="cypress"/>

describe('API Example', () => {
    it('API Test - Validate Header', () => {
        cy.request('http://pokeapi.co/api/v2/pokemon/25').as('pokemon')
        cy.get('@pokemon')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })
});