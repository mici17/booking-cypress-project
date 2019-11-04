import {
    HomePagePo
} from '../HomePageObjects/HomePageObjects.po'

describe('Testing of elements existing on Home Page', () => {
    before(() => {
        cy.visit('https://www.booking.com/index.sr.html')
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

    // it('Animation text should exist on page', () => {
    //     HomePagePo.getAnimationSpan()
    // })

    it('Register input should exist on page', () => {
        HomePagePo.getRegisterButton()
    })

    it('Login input should exist on page', () => {
        HomePagePo.getLoginButton()
    })
})