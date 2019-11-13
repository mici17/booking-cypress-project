const LOGINSELECTORS = Object.freeze({
    BUTTONBACK: '.nw-header-back',
    LOGO: '.icon-logo',
    DROPDOWNBUTTON: '.bui-dropdown',
    DROPDOWNMENU: '.bui-dropdown--active',
    HEADING: 'h1',
    DESCRIPTION: '.nw-step-description',
    EMAILINPUT: '#username',
    PASSWORDINPUT: '#password',
    SUBMITBUTTON: '.bui-button--large',
    FACEBOOKBUTTON: '.access-panel__social-button-facebook',
    GOOGLEBUTTON: '.access-panel__social-button-google',
    REGISTRATIONLINK: '.nw-link-register',
    TERMSLINK: '.nw-terms',
    PRIVACYLINK: '.nw-privacy',
    LANGUAGESELECT: '#lang-sel-sm',
    RESERVATIONCHANGE: '.bui_color_action',
    USERNAMEERROR: '#username-error',
    PASSWORDERROR: '#password-error'

})

class LoginPageObjects {
    visit() {
        cy.visit('account.booking.com/sign-in')
    }

    getButtonBack() {
        return cy.get(LOGINSELECTORS.BUTTONBACK)
    }

    getLogo() {
        return cy.get(LOGINSELECTORS.LOGO)
    }

    getDropdownButton() {
        return cy.get(LOGINSELECTORS.DROPDOWNBUTTON)
    }

    getDropdownMenu() {
        return cy.get(LOGINSELECTORS.DROPDOWNMENU)
    }

    getHeading() {
        return cy.get(LOGINSELECTORS.HEADING)
    }

    getDescription() {
       return cy.get(LOGINSELECTORS.DESCRIPTION)
    }

    getEmailInput() {
        return cy.get(LOGINSELECTORS.EMAILINPUT)
    }

    getPasswordInput() {
        return cy.get(LOGINSELECTORS.PASSWORDINPUT)
    }

    getSubmitButton() {
        return cy.get(LOGINSELECTORS.SUBMITBUTTON)
    }

    getFacebookButton() {
        return cy.get(LOGINSELECTORS.FACEBOOKBUTTON)
    }

    getGoogleButton() {
        return cy.get(LOGINSELECTORS.GOOGLEBUTTON)
    }

    getRegistrationLink() {
        return cy.get(LOGINSELECTORS.REGISTRATIONLINK)
    }

    getTermsLink() {
        return cy.get(LOGINSELECTORS.TERMSLINK)
    }

    getPrivacyLink() {
        return cy.get(LOGINSELECTORS.PRIVACYLINK)
    }

    getReservationChangeLink() {
        return cy.get(LOGINSELECTORS.RESERVATIONCHANGE)
    }

    getLanguageSelector() {
        return cy.get(LOGINSELECTORS.LANGUAGESELECT)
    }

    getEmailErrorMessage() {
        return cy.get(LOGINSELECTORS.USERNAMEERROR)
    }

    getPasswordErrorMessage() {
        return cy.get(LOGINSELECTORS.PASSWORDERROR)
    }

    enterEmail(email) {
        this.getEmailInput()
            .type(email)
        this.getSubmitButton()
            .click()
    }

    enterPassword(password) {
        this.getPasswordInput()
            .type(password)
        this.getSubmitButton()
            .click()
    }

    clickSubmitButton() {
        this.getSubmitButton()
            .click()
    }

}

export const LoginPagePo = new LoginPageObjects()