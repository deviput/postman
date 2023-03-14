describe('Validate Header', () => {

    it('Successfully validates header content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')

        cy.get('@pokemon')
            .its('body')
            .should((body) => {
                expect(body.name).to.equal('ditto')
                expect(body.base_experience).to.equal(101)
                expect(body.weight).to.equal(40)
                expect(body.types[0].type.name).to.equal('normal')

            })
    });
});
