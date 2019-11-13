import {
    LoginPagePo
} from '../pageObjects/LoginPage.po';

describe('Testing if elements exist on Login Page', () => {
    before(() => {
        LoginPagePo.visit()
    })

    it('Should have back button on page', () => {
        LoginPagePo.getButtonBack().should('exist')
    })

    it('Should have logo on page', () => {
        LoginPagePo.getLogo().should('exist')
    })

    it('Should have dropdpwn button', () => {
        LoginPagePo.getDropdownButton().should('exist')
    })

    it('Should have heading on page', () => {
        LoginPagePo.getHeading().should('exist')
    })

    it('Should have description', () => {
        LoginPagePo.getDescription().should('exist')
    })

    it('Should have email input', () => {
        LoginPagePo.getEmailInput().should('exist')
    })

    it('Should have submit button', () => {
        LoginPagePo.getSubmitButton().should('exist')
    })

    it('Should have facebook button', () => {
        LoginPagePo.getFacebookButton().should('exist')
    })

    it('Should have google button', () => {
        LoginPagePo.getGoogleButton().should('exist')
    })

    it('Should have registration link', () => {
        LoginPagePo.getRegistrationLink().should('exist')
    })

    it('Should have terms link', () => {
        LoginPagePo.getTermsLink().should('exist')
    })

    it('Should have privacy link', () => {
        LoginPagePo.getPrivacyLink().should('exist')
    })

    it('Should have reservation change link', () => {
        LoginPagePo.getReservationChangeLink().should('exist')
    })

    it('Should have language selector', () => {
        LoginPagePo.getLanguageSelector().should('exist')
    })
})