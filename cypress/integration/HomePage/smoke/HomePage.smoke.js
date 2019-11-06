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
})