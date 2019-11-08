import {
    CREDENTIALS
} from '../../../config/credentials'
import {
    ProfilePagePo
} from '../pageObjects/ProfilePage.po'

import {
    HomePagePo
} from '../../HomePage/pageObjects/HomePage.po'

import {
    LoginPagePo
} from '../../LoginPage/pageObjects/LoginPage.po'

describe('Testing of elements existing on Profile Page', () => {
    before(() => {
        HomePagePo.visit()
        HomePagePo
            .getLoginButton()
            .click()
        LoginPagePo.enterEmail(CREDENTIALS.EMAIL)
        LoginPagePo.enterPassword(CREDENTIALS.PASSWORD)
    })

    it('Logo image should exist on page', () => {
        ProfilePagePo.getLogoImage()
    })

    it('Currency selector should exist on page', () => {
        ProfilePagePo.getCurrencySelector()
    })

    it('Language selector should exist on page', () => {
        ProfilePagePo.getLanguageSelector()
    })

    it('Profile picture should exist on page', () => {
        ProfilePagePo.getProfilePicture()
    })

    it('Username should exist on page', () => {
        ProfilePagePo.getUserName()
    })

    it('Dropdown menu should exist on page when username is clicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getDropdownMenu()
            .should('exist')
    })

    it('My dashboard link should exist on page', () => {
        ProfilePagePo.getDashboard()
    })

    it('My reservations link should exist on page', () => {
        ProfilePagePo.getReservations()
    })

    it('Rewiew link should exist on page', () => {
        ProfilePagePo.getRewiev()
    })

    it('Wishlists link should exist on page', () => {
        ProfilePagePo.getWishLists()
    })

    it('Get the app link should exist on page', () => {
        ProfilePagePo.getGta()
    })

    it('Help link should exist on page', () => {
        ProfilePagePo.getHelp()
    })

    it('Settings link should exist on page', () => {
        ProfilePagePo.getSettings()
    })

    it('Sign out link should exist on page', () => {
        ProfilePagePo.getSignOut()
    })
})