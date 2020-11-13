import { NameMaker } from '/Users/anaskvortsova/Desktop/Selenium Alternatives/cyber.io/cypress/integration/coveros_website/Utilities/name_maker';

const FIRST_NAME_INPUT = 'input[id="register-firstname"]'
const SECOND_NAME_INPUT = 'input[id="register-lastname"]'
const USER_NAME_INPUT = 'input[id="register-username"]'
const EMAIL_INPUT = 'input[id="register-email"]'
const PASSWORD_INPUT = 'input[id="register-password"]'
const CONFIRM_PASSWORD_INPUT = 'input[id="register-confirm-password"]'
const SUBMIT_BUTTON = 'button[type=submit]'
const FAILED_REGISTRATION_MESSAGE = 'Failed registration'
const INVALID_EMAIL_MESSAGE_TEXT = 'A valid email address is required'
const INVALI_PASSWORD_MESSAGE_TEXT = 'This is required'
const PASSWORD_MISMATCH_MESSAGE_TEXT = 'Passwords must match' 

export class RegistrationTab{

    visit() {
        cy.visit('http://localhost/login');
        cy.contains('Register').click();
    }

    fillIn(firstName, lastName, userName, email, password, confirmPassword) {
        cy.get(FIRST_NAME_INPUT)
            .type(firstName)
            .should('have.value', firstName);
        cy.get(SECOND_NAME_INPUT)
            .type(lastName)
            .should('have.value', lastName);
        cy.get(USER_NAME_INPUT)
            .type(userName)
            .should('have.value', userName);
        cy.get(EMAIL_INPUT)
            .type(email)
            .should('have.value', email);
        cy.get(PASSWORD_INPUT)
            .type(password)
            .should('have.value', password);
        cy.get(CONFIRM_PASSWORD_INPUT)
            .type(confirmPassword)
            .should('have.value', confirmPassword);  
    }

    clearPasswordField() {
        cy.get(PASSWORD_INPUT).clear().should('have.value', '');
    }

    clearConfirmPasswordField() {
        cy.get(CONFIRM_PASSWORD_INPUT).clear().should('have.value', '');
    }

    submit() {
        cy.get(SUBMIT_BUTTON).click()
    }

    getRegistrationFailedMessage(){
        return cy.get('p').contains(FAILED_REGISTRATION_MESSAGE);
    }

    getInvalidEmailMessage() {
        return cy.get('mat-error').contains(INVALID_EMAIL_MESSAGE_TEXT);
    }

    getInvalidPasswordMessage() {
        return cy.get('mat-error').contains(INVALI_PASSWORD_MESSAGE_TEXT);
    }

    getInvalidConfirmPasswordMessage() {
        return cy.get('mat-error').contains(INVALI_PASSWORD_MESSAGE_TEXT);
    }

    getPasswordMismatchMessage() {
        return cy.get('mat-error').contains(PASSWORD_MISMATCH_MESSAGE_TEXT);
    }
}

