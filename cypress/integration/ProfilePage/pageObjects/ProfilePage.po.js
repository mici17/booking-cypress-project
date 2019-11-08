const SELECTORS = Object.freeze({
    LOGOIMAGE: '#logo_no_globe_new_logo',
    CURRENCYSELECTOR: '[data-id=currency_selector]',
    DROPDOWNVALUTES: '.uc_currency',
    LANGUAGESELECTOR: '[data-id=language_selector]',
    ANIMATIONSPAN: '.add-property-button-animation-text',
    PROFILEPICTURE: '.user_avatar--circle',
    USERNAME: '.user_name_block',
    DROPDOWNMENU: '#profile-menu',
    MYDASHBORD: '.profile_menu__item--mydashboard',
    MYRESERVATIONS: '.profile_menu__item--myreservations',
    REWIEWTIMELINE: '.profile_menu__item--reviewtimeline',
    WISHLISTS: '.profile_menu__item--wishlists',
    GTA: '.profile_menu__item--gta',
    HELP: '.profile_menu__item--help',
    MYSETTINGS: '.profile_menu__item--mysettings',
    SIGNOUT: '.profile-menu__link'


})

class ProfilePageObjects {

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

    getProfilePicture() {
        return cy.get(SELECTORS.PROFILEPICTURE)
    }

    getUserName() {
        return cy.get(SELECTORS.USERNAME)
    }

    getDropdownMenu() {
        return cy.get(SELECTORS.DROPDOWNMENU)
    }

    getDashboard() {
        return cy.get(SELECTORS.MYDASHBORD)
    }

    getReservations() {
        return cy.get(SELECTORS.MYRESERVATIONS)
    }

    getRewiev() {
        return cy.get(SELECTORS.REWIEWTIMELINE)
    }

    getWishLists() {
        return cy.get(SELECTORS.WISHLISTS)
    }

    getGta() {
        return cy.get(SELECTORS.GTA)
    }

    getHelp() {
        return cy.get(SELECTORS.HELP)
    }

    getSettings() {
        return cy.get(SELECTORS.MYSETTINGS)
    }

    getSignOut() {
        return cy.get(SELECTORS.SIGNOUT)
    }
}

export const ProfilePagePo = new ProfilePageObjects()