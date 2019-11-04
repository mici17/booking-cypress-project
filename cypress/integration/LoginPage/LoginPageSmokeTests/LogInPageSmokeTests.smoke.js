import {
    LoginPagePo
} from '../LoginPageObjects/LoginPageObjects.po';

describe('Testing if elements exist on Login Page', () => {
    before(() => {
        cy.visit('https://account.booking.com/sign-in')
    })

    it('Should have back button on page', () => {
        LoginPagePo.getButtonBack()
    })

    it('Should have logo on page', () => {
        LoginPagePo.getLogo()
    })

    it('Should have dropdpwn button', () => {
        LoginPagePo.getDropdownButton()
    })

    it('Should have heading on page', () => {
        LoginPagePo.getHeading()
    })

    it('Should have description', () => {
        LoginPagePo.getDescription()
    })

    it('Should have email input', () => {
        LoginPagePo.getEmailInput()
    })

    it('Should have submit button', () => {
        LoginPagePo.getSubmitButton()
    })

    it('Should have facebook button', () => {
        LoginPagePo.getFacebookButton()
    })

    it('Should have google button', () => {
        LoginPagePo.getGoogleButton()
    })

    it('Should have registration link', () => {
        LoginPagePo.getRegistrationLink()
    })

    it('Should have terms link', () => {
        LoginPagePo.getTermsLink()
    })

    it('Should have privacy link', () => {
        LoginPagePo.getPrivacyLink()
    })

    it('Should have reservation change link', () => {
        LoginPagePo.getReservationChangeLink()
    })

    it('Should have language selector', () => {
        LoginPagePo.getLanguageSelector()
    })
})