import {
    LoginPagePo
} from '../LoginPageObjects/LoginPageObjects.po';

import {
    HomePagePo
} from '../../HomePage/HomePageObjects/HomePageObjects.po';

import {
    Credentials
} from '../../../config/credentialsExample';

describe('Testing login page functionality', () => {
    beforeEach(() => {
        cy.visit('account.booking.com/sign-in')
    })

    it('Should show dropdown menu when button is clicked', () => {
        LoginPagePo
            .getDropdownButton()
            .click()
        LoginPagePo
            .getDropdownMenu()
            .should('be.visible')
    })

    it('Should be able to sign in', () => {
        LoginPagePo.enterEmail(Credentials.email)

        cy.url('account.booking.com/sign-in/password')

        LoginPagePo.enterPassword(Credentials.password)
    })

    it('Should show message when email is not entered', () => {
        LoginPagePo.clickSubmitButton()
        LoginPagePo
            .getEmailErrorMessage()
            .should('be.visible')
    })

    it('Should show error message when invalid email entered', () => {
        LoginPagePo.enterEmail('example')
        LoginPagePo
            .getEmailErrorMessage()
            .should('be.visible')
    })

    it('Should show message when password is not entered', () => {
        LoginPagePo.enterEmail(Credentials.email)
        LoginPagePo
            .getPasswordInput()
            .type('{enter}')

        LoginPagePo
            .getPasswordErrorMessage()
            .should('be.visible')
    })

    it('Should show error message when invalid password is entered', () => {
        LoginPagePo.enterEmail(Credentials.email)
        LoginPagePo.enterPassword('123')
        LoginPagePo
            .getPasswordErrorMessage()
            .should('be.visible')
    })

    it('Should redirect to facebook page when button is clicked', () => {
        LoginPagePo
            .getFacebookButton()
            .click()
    })

    it('Should redirect to google page when button is clicked', () => {
        LoginPagePo
            .getGoogleButton()
            .click()
    })

    it('Should redirect to register page when sign up link is clicked', () => {
        LoginPagePo
            .getRegistrationLink()
            .click()

        cy.url().should('include', '/account.booking.com/register')
    })

    it('Should redirect to terms page when terms link is clicked', () => {
        LoginPagePo
            .getTermsLink()
            .click()
        cy.url('*booking.com/content/terms')
    })

    it('Should redirect to privacy page when privacy link is clicked', () => {
        LoginPagePo
            .getPrivacyLink()
            .click()
        cy.url('*booking.com/content/privacy')
    })

    it('Should redirect to home page when back arrow is clicked', () => {
        cy.visit('https://www.booking.com/')
        HomePagePo
            .getLoginButton()
            .click()

        cy.url().should('include', '/account.booking.com/sign-in')

        LoginPagePo
            .getButtonBack()
            .click()

        cy.url().should('eq', 'https://www.booking.com/')
    })
})