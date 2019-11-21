const SELECTORS = Object.freeze({
    NAVBAR: '.settings-navbar__nav ',
    HEADTITLE: '.settings-head__title__h1',
    SUBTITLE: '.settings-head__subheading',
    CONTENT: '.settings-content',
    LABEL: '.settings-item__label',
    AVATAR: '.settings-avatar',
    CONTROLBUTTON: '.settings-control--button',
    LEGENDITEM: '.settings-input__legenditem',
    NICKNAME: '#nickname',
    BDAY: '#bday',
    BMONTH: '#bmonth',
    BYEAR: '#byear',
    NATIONALITY: '#nationality'

})

class SettingsPagePageObjects {
    getNavbar() {
        return cy.get(SELECTORS.NAVBAR)
    }

    getHeadTitle() {
        return cy.get(SELECTORS.HEADTITLE)
    }

    getHeadSubtitle() {
        return cy.get(SELECTORS.SUBTITLE)
    }

    getContent() {
        return cy.get(SELECTORS.CONTENT)
    }

    getLabel() {
        return cy.get(SELECTORS.LABEL)
    }

    getAvatar() {
        return cy.get(SELECTORS.AVATAR)
    }

    getControlButton() {
        return cy.get(SELECTORS.CONTROLBUTTON)
    }

    getLegendItem() {
        return cy.get(SELECTORS.LEGENDITEM)
    }

    getNickname() {
        return cy.get(SELECTORS.NICKNAME)
    }

    getBday() {
        return cy.get(SELECTORS.BDAY)
    }

    getBmonth() {
        return cy.get(SELECTORS.BMONTH)
    }

    getByear() {
        return cy.get(SELECTORS.BYEAR)
    }

    getNationality() {
        return cy.get(SELECTORS.NATIONALITY)
    }
}

export const SettingsPagePo = new SettingsPagePageObjects()