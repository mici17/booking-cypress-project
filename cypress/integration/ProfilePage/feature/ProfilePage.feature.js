import {
    CREDENTIALS
} from '../../../config/credentials';
import {
    GlobalPO
} from '../../shared/Global.po';
import {
    ProfilePagePo
} from '../pageObjects/ProfilePage.po';

import {
    HomePagePo
} from '../../HomePage/pageObjects/HomePage.po';

import {
    LoginPagePo
} from '../../LoginPage/pageObjects/LoginPage.po';

describe('Testing Profile Page functionality', () => {
    beforeEach(() => {
        HomePagePo.visit()
        HomePagePo
            .getLoginButton()
            .click()
        LoginPagePo.enterEmail(CREDENTIALS.EMAIL)
        LoginPagePo.enterPassword(CREDENTIALS.PASSWORD)
    })

    it('Should navigate to My Dashboard page when link is clicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getDashboard()
            .type('{enter}')
        GlobalPO
            .getUrl()
            .should('include', '/mydashboard')
    })

    it('Should navigate to My Reservations page when link is clicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getReservations()
            .type('{enter}')
        GlobalPO
            .getUrl()
            .should('include', '/myreservations')
    })

    it('Should navigate to My Reviews page when link is clicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getRewiev()
            .type('{enter}')
        GlobalPO
            .getUrl()
            .should('include', '/reviewtimeline')
    })


    it('Should navigate to My Dashboard page when link is clicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getDashboard()
            .type('{enter}')
        GlobalPO
            .getUrl()
            .should('include', '/mydashboard')
    })

    it('Should navigate to My Wishlist page when link is ckicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getWishLists()
            .type('{enter}')
        GlobalPO
            .getUrl()
            .should('include', '/mywishlist')
    })

    it('Should navigate to Get the app page when link is clicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getGta()
            .type('{enter}')
        GlobalPO
            .getUrl()
            .should('include', '/apps')
    })

    it('Should navigate to Customer Service page when link is clicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getHelp()
            .type('{enter}')
        GlobalPO
            .getUrl()
            .should('include', '/content/cs')
    })

    it('Should navigate to Settings page when link is clicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getSettings()
            .type('{enter}')
        GlobalPO
            .getUrl()
            .should('include', '/mysettings')
    })

    it('Should sign out when sign out link is clicked', () => {
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getSignOut()
            .click({multiple:true})
        GlobalPO
            .getUrl()
            .should('include', '/booking.com')
    })

})