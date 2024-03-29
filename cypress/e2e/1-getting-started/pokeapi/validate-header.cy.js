describe('Validate Header', () => {
    it('Suceessfully validate body-name', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
        cy.get('@pokemon').its('status').should('equal', 200)
        cy.get('@pokemon').its('body').should('include', { name: 'ditto' })

    });
});