describe('Create New User', () => {
    it('Verify the new user will be created', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).as('newUser')
        cy.get('@newUser').its('status').should('equal', 201)
    });
})