import {
    HomePagePo
} from '../pageObjects/HomePage.po'

describe('Testing of elements existing on Home Page', () => {
    before(() => {
        HomePagePo.visit()
    })

    it('Logo image should exist on page', () => {
        HomePagePo.getLogoImage().should('exist')
    })

    it('Currency selector should exist on page', () => {
        HomePagePo.getCurrencySelector().should('exist')
    })

    it('Language selector should exist on page', () => {
        HomePagePo.getLanguageSelector().should('exist')
    })

    it('Register input should exist on page', () => {
        HomePagePo.getRegisterButton().should('exist')
    })

    it('Login input should exist on page', () => {
        HomePagePo.getLoginButton().should('exist')
    })

    it('Searchbox title should exist on page', () => {
        HomePagePo.getSearchboxTitle().should('exist')
    })
    
    it('Searchbox subtitle should exist on page', () => {
        HomePagePo.getSearchboxSubtitle().should('exist')
    })

    it('Destination input should exist on page', () => {
        HomePagePo.getDestinationInput().should('exist')
    })

    
    it('Date input should exist on page', () => {
        HomePagePo.getDateInput().should('exist')
    })
    
    it('Guests input should exist on page', () => {
        HomePagePo.getGuestsInput().should('exist')
    })

    it('Search button should exist on page', () => {
        HomePagePo.getSearchButton().should('exist')
    })

    it('Travel purpose checkbox should exist on page', () => {
        HomePagePo.getTravelPurposeCheckbox().should('exist')
    })
})