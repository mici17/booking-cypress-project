import {
    CREDENTIALS
} from '../../../config/credentials';
import {
    LoginPagePo
} from '../../LoginPage/pageObjects/LoginPage.po';
import {
    ProfilePageNavigationPO
} from '../pageObjects/ProfilePageNavigation.po';
import {
    ProfilePagePo
} from '../../ProfilePage/pageObjects/ProfilePage.po';

describe('Testing if elements exist on page', () => {
    before(() => {
        LoginPagePo.visit()
        LoginPagePo.enterEmail(CREDENTIALS.EMAIL)
        LoginPagePo.enterPassword(CREDENTIALS.PASSWORD)
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getDashboard()
            .type('{enter}')
    })

    it('Navigation bar shoud exist on page', () => {
        ProfilePageNavigationPO.getNavbar().should('exist')
    })

    it('Dashboard link shoud exist on page', () => {
        ProfilePageNavigationPO.getDashboardLink().should('exist')
    })

    it('Booking link shoud exist on page', () => {
        ProfilePageNavigationPO.getBookingLink().should('exist')
    })

    it('Reviews link shoud exist on page', () => {
        ProfilePageNavigationPO.getReviewsLink().should('exist')
    })

    it('Settings link shoud exist on page', () => {
        ProfilePageNavigationPO.getSettingsLink().should('exist')
    })

    it('List of Properties link shoud exist on page', () => {
        ProfilePageNavigationPO.getListYourPropertyLink().should('exist')
    })

    it('Travel community link should exist on page', ()=> {
         ProfilePageNavigationPO.getTravelCommunitiesLink().should('exist')
    })

})
