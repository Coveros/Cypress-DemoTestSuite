const USER_NAME_INPUT = 'input[id="sign-in-username"]'
const PASSWORD_INPUT = 'input[id="sign-in-password"]'
const SUBMIT_BUTTON = 'button[type=submit]'
const FAILED_LOGIN_MESSAGE = 'Failed login'
const REQUIRED_FIELD_ERROR_MESSAGE = 'This is required'

export class LoginTab{
    visit() {
        cy.visit('http://localhost/login');
    }

    fillIn(userName, password) {
        cy.get(USER_NAME_INPUT)
            .type(userName)
            .should('have.value', userName);
        cy.get(PASSWORD_INPUT)
            .type(password)
            .should('have.value', password);
    }

    submit() {
        cy.get(SUBMIT_BUTTON).click()
    }

    usernameInputClick(){
        cy.get(USER_NAME_INPUT).click();
    }

    getLoginFailedMessage(){
        return cy.get('p').contains(FAILED_LOGIN_MESSAGE);
    }

    getRequiredFieldErrorMessage(){
        return cy.get('mat-error').contains(REQUIRED_FIELD_ERROR_MESSAGE);
    }

    clearPasswordField() {
        cy.get(PASSWORD_INPUT).clear().should('have.value', '');
    }

    clearUsernameField() {
        cy.get(USER_NAME_INPUT).clear().should('have.value', '');
    }
}