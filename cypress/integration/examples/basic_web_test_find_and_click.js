describe('Basic Web App Test', function(){
    it ('Go To Web Page And Do Smth', function(){
        //Arrange - set up initial app state
        //- go to web page
        cy.visit('https://example.cypress.io')
        //- query for an element
        cy.contains('type')
        //Act - take an action
        //- interact with that element
        cy.contains('type').click()
        //Assert - make an assertiom
        //- make an assertion about page content
        cy.url().should('include', '/commands/actions')
    })
})