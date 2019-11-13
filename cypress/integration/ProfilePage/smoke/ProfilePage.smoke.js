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
        LoginPagePo.visit()
        LoginPagePo.enterEmail(CREDENTIALS.EMAIL)
        LoginPagePo.enterPassword(CREDENTIALS.PASSWORD)
    })

    it('Logo image should exist on page', () => {
        ProfilePagePo.getLogoImage().should('exist')
    })

    it('Currency selector should exist on page', () => {
        ProfilePagePo.getCurrencySelector().should('exist')
    })

    it('Language selector should exist on page', () => {
        ProfilePagePo.getLanguageSelector().should('exist')
    })

    it('Profile picture should exist on page', () => {
        ProfilePagePo.getProfilePicture().should('exist')
    })

    it('Username should exist on page', () => {
        ProfilePagePo.getUserName().should('exist')
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
        ProfilePagePo.getDashboard().should('exist')
    })

    it('My reservations link should exist on page', () => {
        ProfilePagePo.getReservations().should('exist')
    })

    it('Rewiew link should exist on page', () => {
        ProfilePagePo.getRewiev().should('exist')
    })

    it('Wishlists link should exist on page', () => {
        ProfilePagePo.getWishLists().should('exist')
    })

    it('Get the app link should exist on page', () => {
        ProfilePagePo.getGta().should('exist')
    })

    it('Help link should exist on page', () => {
        ProfilePagePo.getHelp().should('exist')
    })

    it('Settings link should exist on page', () => {
        ProfilePagePo.getSettings().should('exist')
    })

    it('Sign out link should exist on page', () => {
        ProfilePagePo.getSignOut().should('exist')
    })
})