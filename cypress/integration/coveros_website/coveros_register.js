import { RegistrationTab } from './POM/registration_tab';
import { WelcomePage } from './POM/welcome_page';
import { NameMaker } from './Utilities/name_maker';

const registrationTab = new RegistrationTab();
const welcomePage = new WelcomePage();

describe('Successfull Registration Tests', function(){
    it ('Go To Coveros web page and submit a registration form', function(){
        //arrange
        name = NameMaker.makeName(5);
        //act
        registrationTab.visit();
        registrationTab.fillIn(name, name, name, name+"@gmail.com", "aaa", "aaa");
        registrationTab.submit();
        //assert
        welcomePage.getUserMenuItem().should('exist');
    })
})

describe('Registraton Failed - Invalid credentials', function(){
    this.beforeEach(() => {
        registrationTab.visit();
    })

    it ('Try to create a new user without username', function(){

        registrationTab.fillIn(" ", " ", " ", "a@gmail.com", "aaa", "aaa");
        registrationTab.submit();

        registrationTab.getRegistrationFailedMessage().should('exist');
    })

    it ('Try to create a new user with invalid email - without @', function(){
        
        registrationTab.fillIn(" ", " ", " ", "agmail.com", "aaa", "aaa");

        registrationTab.getInvalidEmailMessage().should('exist');
    })

    it ('Try to create a new user with invalid email - invalid domain name', function(){
      
        registrationTab.fillIn(" ", " ", " ", "a@.", "aaa", "aaa");

        registrationTab.getInvalidEmailMessage().should('exist');
    })

    it ('Try to create a new user with invalid email - invalid domain name', function(){
        
        registrationTab.fillIn(" ", " ", " ", "a@.com", "aaa", "aaa");

        registrationTab.getInvalidEmailMessage().should('exist');
    })

    it ('Try to create a new user without password', function(){
        name = NameMaker.makeName(5);

        registrationTab.fillIn(" ", " ", name, "a@gmail.com", "aaa", "aaa");
        registrationTab.clearPasswordField();

        registrationTab.getInvalidPasswordMessage().should('exist');
    })

    it ('Try to create a new user without confirm password', function(){
        name = NameMaker.makeName(5);

        registrationTab.fillIn(" ", " ", name, "a@gmail.com", "aaa", "aaa");
        registrationTab.clearConfirmPasswordField();

        registrationTab.getInvalidPasswordMessage().should('exist');
    })

    it ('Try to create a new user confirmed password mismatch', function(){
        name = NameMaker.makeName(5);

        registrationTab.fillIn(" ", " ", name, "a@gmail.com", "aaa", "bb");

        registrationTab.getPasswordMismatchMessage().should('exist');
    })

    describe('Registration Failed - Register a user twice', function(){
        it ('Try to register the same user twice', function(){
            //arrange
            name = NameMaker.makeName(5);
            userName = name;
            password = "aat";
            cy.request('POST', 'http://localhost/api/auth/register', {
            "firstName": name,
            "lastName": name,
            "username": userName,
            "email": name+"@gmail.com",
            "password": password
            }).then(cy.request('POST', 'http://localhost/api/auth/register', {
                "firstName": name,
                "lastName": name,
                "username": userName,
                "email": name+"@gmail.com",
                "password": password
                }).then((resp) => {
                    // redirect status code is 500
                    expect(resp.status).to.eq(500);
                })       
            )
        })
    })
})

