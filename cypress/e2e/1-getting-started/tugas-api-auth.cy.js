Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
) => {
    cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
        username: email,
        password,
    }).then((response) => {
        cy.setCookie('sessionID', response.body.sessionID)
        cy.setCookie('userId', response.body.userId)
        cy.setCookie('userName', response.body.userName)
        cy.visit('/#!/main')
    })
})