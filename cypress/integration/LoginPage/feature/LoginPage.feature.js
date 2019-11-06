import {
    CREDENTIALS
} from '../../../config/credentials';
import {
    GlobalPO
} from '../../shared/Global.po';
import {
    LoginPagePo
} from '../pageObjects/LoginPage.po';

import {
    HomePagePo
} from '../../HomePage/pageObjects/HomePage.po';


describe('Testing login page functionality', () => {
    beforeEach(() => {
        LoginPagePo.visit()
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
        LoginPagePo.enterEmail(CREDENTIALS.EMAIL)

        GlobalPO.getUrl('account.booking.com/sign-in/password')

        LoginPagePo.enterPassword(CREDENTIALS.PASSWORD)
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
        LoginPagePo.enterEmail(CREDENTIALS.EMAIL)
        LoginPagePo
            .getPasswordInput()
            .type('{enter}')

        LoginPagePo
            .getPasswordErrorMessage()
            .should('be.visible')
    })

    it('Should show error message when invalid password is entered', () => {
        LoginPagePo.enterEmail(CREDENTIALS.EMAIL)
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

        GlobalPO
            .getUrl()
            .should('include', '/account.booking.com/register')
    })

    it('Should redirect to terms page when terms link is clicked', () => {
        LoginPagePo
            .getTermsLink()
            .click()
        GlobalPO
            .getUrl('*booking.com/content/terms')
    })

    it('Should redirect to privacy page when privacy link is clicked', () => {
        LoginPagePo
            .getPrivacyLink()
            .click()
        GlobalPO
            .getUrl('*booking.com/content/privacy')
    })

    it('Should redirect to home page when back arrow is clicked', () => {
        HomePagePo.visit()

        HomePagePo
            .getLoginButton()
            .click()

        GlobalPO
            .getUrl()
            .should('include', '/account.booking.com/sign-in')

        LoginPagePo
            .getButtonBack()
            .click()

        GlobalPO
            .getUrl()
            .should('eq', 'https://www.booking.com/index.sr.html')
    })
})