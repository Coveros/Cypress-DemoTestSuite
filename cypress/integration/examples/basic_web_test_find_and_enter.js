describe('Basic Web App Test', function(){
    it ('Go To Web Page And Do Smth', function(){
        //Arrange - set up initial app state
        //- go to web page
        cy.visit('https://example.cypress.io')
        //Act - take an action
        //- interact with that element
        cy.contains('type').click()
        //Assert - make an assertiom
        //- make an assertion about page content
        cy.url().should('include', '/commands/actions')
        //- find an input by CSS class and type an email value
        //-make sure its value reflects the text we've entered
        cy.url().get('.action-email')
            .type('fakeemail@email.com')
            .should('have.value', 'fakeemail@email.com')
    })
})