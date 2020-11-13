// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

import { LoginTab } from './POM/login_tab'
import { WelcomePage } from './POM/welcome_page';
import { NameMaker } from './Utilities/name_maker';

const welcomePage = new WelcomePage();
const login = new LoginTab();

Cypress.Commands.add('loginWith', ({ userName, password }) =>
    login.visit().fillIn(userName, password).submit()
)

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


