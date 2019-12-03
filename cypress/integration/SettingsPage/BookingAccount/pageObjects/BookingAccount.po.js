const SELECTORS = Object.freeze({
    NAVBAR: '.settings-navbar__nav ',
    HEADTITLE: '.settings-head__title__h1',
    SUBTITLE: '.settings-head__subheading',
    CONTENT: '.settings-content',
    LABEL: '.settings-item__label',
    AVATARIMAGE: '.avatar_img',
    AVATARUPLOADFORM: '.user-avatar-upload',
    AVATARUPLOABUTTON: '.avatar-upload-file',
    AVATARSAVEBUTTON: '.submit-avatar',
    XBUTTON: '.modal-mask-closeBtn',
    CONTROLBUTTON: '.settings-control--button',
    LEGENDITEM: '.settings-input__legenditem',
    NICKNAME: '#nickname',
    BDAY: '#bday',
    BMONTH: '#bmonth',
    BYEAR: '#byear',
    NATIONALITY: '#nationality'
})

class BookingAccountPageObjects {
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

    getAvatarImage() {
        return cy.get(SELECTORS.AVATARIMAGE)
    }

    getAvatarForm() {
        return cy.get(SELECTORS.AVATARUPLOADFORM)
    }

    getAvatarUploadButton() {
        return cy.get(SELECTORS.AVATARUPLOADBUTTON)
    }

    getXButton() {
        return cy.get(SELECTORS.XBUTTON)
    }

    getAvatarSaveButton() {
        return cy.get(SELECTORS.AVATARSAVEBUTTON)
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

export const BookingAccountPo = new BookingAccountPageObjects()