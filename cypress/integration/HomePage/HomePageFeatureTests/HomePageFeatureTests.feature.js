import {
    HomePagePo
} from '../HomePageObjects/HomePageObjects.po';

describe('Home Page functionalty tests', () => {
    before(() => {
        cy.visit('https://www.booking.com/index.sr.html')
    })

    it('Should show dropdown menu when currency selector is clicked', () => {
        HomePagePo
            .getCurrencySelector()
            .click()

        HomePagePo
            .getDropdownValutes()
            .should('be.visible')
    })

    it('Should redirect to login page when ulogujte se button is clicked', () => {
        HomePagePo
            .getLoginButton()
            .click()

        cy.url().should('include', '/account.booking.com/sign-in')    
    })

    it('Should redirect to register page when registrujte se button is clicked', () => {
        cy.visit('https://www.booking.com/index.sr.html')

        HomePagePo
            .getRegisterButton()
            .click()
            
        cy.url().should('include', '/account.booking.com/register')    
    })


})