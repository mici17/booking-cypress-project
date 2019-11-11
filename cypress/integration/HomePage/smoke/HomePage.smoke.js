import {
    HomePagePo
} from '../pageObjects/HomePage.po'

describe('Testing of elements existing on Home Page', () => {
    before(() => {
        HomePagePo.visit()
    })

    it('Logo image should exist on page', () => {
        HomePagePo.getLogoImage()
    })

    it('Currency selector should exist on page', () => {
        HomePagePo.getCurrencySelector()
    })

    it('Language selector should exist on page', () => {
        HomePagePo.getLanguageSelector()
    })

    it('Register input should exist on page', () => {
        HomePagePo.getRegisterButton()
    })

    it('Login input should exist on page', () => {
        HomePagePo.getLoginButton()
    })

    it('Searchbox title should exist on page', () => {
        HomePagePo.getSearchboxTitle()
    })
    
    it('Searchbox subtitle should exist on page', () => {
        HomePagePo.getSearchboxSubtitle()
    })

    it('Destination input should exist on page', () => {
        HomePagePo.getDestinationInput()
    })

    
    it('Date input should exist on page', () => {
        HomePagePo.getDateInput()
    })
    
    it('Guests input should exist on page', () => {
        HomePagePo.getGuestsInput()
    })

    it('Search button should exist on page', () => {
        HomePagePo.getSearchButton()
    })

    it('Travel purpose checkbox should exist on page', () => {
        HomePagePo.getTravelPurposeCheckbox()
    })
})