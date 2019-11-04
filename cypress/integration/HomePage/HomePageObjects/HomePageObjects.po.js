const SELECTORS = Object.freeze({
    LOGOIMAGE: '#logo_no_globe_new_logo',
    CURRENCYSELECTOR: '[data-id=currency_selector]',
    DROPDOWNVALUTES: '.uc_currency',
    LANGUAGESELECTOR: '[data-id=language_selector]',
    ANIMATIONSPAN: '.add-property-button-animation-text',
    REGISTERBUTTON: '#current_account_create',
    LOGINBUTTON: '#current_account'

})

class HomePagePageObjects {

    getLogoImage() {
        cy.get(SELECTORS.LOGOIMAGE)
    }

    getCurrencySelector() {
        return cy.get(SELECTORS.CURRENCYSELECTOR)
    }

    getDropdownValutes() {
        return cy.get(SELECTORS.DROPDOWNVALUTES)
    }

    getLanguageSelector() {
        return cy.get(SELECTORS.LANGUAGESELECTOR)
    }

    getAnimationSpan() {
        cy.get(SELECTORS.ANIMATIONSPAN)
    }

    getRegisterButton() {
        return cy.get(SELECTORS.REGISTERBUTTON)
    }

    getLoginButton() {
        return cy.get(SELECTORS.LOGINBUTTON)
                 
    }
}

export const HomePagePo = new HomePagePageObjects()