const USERS_MENU_ITEM = 'a[id="user-menu-item"]'
const SIGN_OUT_BUTTON = 'button[id="sign-out-button"]'

export class WelcomePage {
    
    getUserMenuItem(){
        return cy.get(USERS_MENU_ITEM);
    }

    signOut(){
        cy.get(SIGN_OUT_BUTTON).click();
    }
}