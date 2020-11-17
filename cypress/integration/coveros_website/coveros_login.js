import { LoginTab } from './POM/login_tab'
import { WelcomePage } from './POM/welcome_page';
import { NameMaker } from './Utilities/name_maker';

const welcomePage = new WelcomePage();
const login = new LoginTab();

describe('Authorized User Login Tests', function(){
    var name = null;
    var password = null;

    beforeEach(() => {
        name = NameMaker.makeName(6);
        password = "aat";
        cy.request('POST', 'http://localhost/api/auth/register', {
            "firstName": name,
            "lastName": name,
            "username": name,
            "email": name+"@gmail.com",
            "password": password
        }).then((response) => {
            // response.body is automatically serialized into JSON
            expect(response.body.user).to.have.property('firstName', name);
        });
        login.visit();   
    })

    it ('Successfully Log In', function(){

        login.fillIn(name, password);
        login.submit();

        welcomePage.getUserMenuItem().should('exist');
    })
   
    it ('Loging Failed - Missing username', function(){
        login.fillIn(name, password);
        login.clearUsernameField();

        login.getRequiredFieldErrorMessage().should('exist');
    })

    it ('Loging Failed - Missing Password', function(){
        login.fillIn(name, password);
        login.clearPasswordField();
        login.usernameInputClick();

        login.getRequiredFieldErrorMessage().should('exist');
    })
})

describe('Failed Login Tests - Not Authorized', function(){

    it ('Loging Failed - Unregistered user', function(){
        login.visit();
        login.fillIn("newUnregisteredUser", "aatt");
        login.submit();

        login.getLoginFailedMessage().should('exist');
    })
})
