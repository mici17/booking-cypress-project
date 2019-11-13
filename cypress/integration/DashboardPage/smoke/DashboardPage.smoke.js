import {
    CREDENTIALS
} from '../../../config/credentials';
import {
    DashboardPO
} from '../pageObjects/DashboardPage.po';
import {
    LoginPagePo
} from '../../LoginPage/pageObjects/LoginPage.po';
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

    it('Profile card should exist on page', () => {
        DashboardPO.getProfileCard().should('exist')
    })

    it('Profile title should exist on page', () => {
        DashboardPO.getProfileTitle().eq(0).should('exist')
    })

    it('Action panel should exist on page', () => {
        DashboardPO.getActionPanel().should('exist')
    })

    it('Search box should exist on page', () => {
        DashboardPO.getSearchBox().should('exist')
    })

    it('Find details box should exist on page', () => {
        DashboardPO.getFindDeals().should('exist')
    })

    it('Add details box should exist on page', () => {
        DashboardPO.getAddDetails().should('exist')
    })

    it('Download app box should exist on page', () => {
        DashboardPO.getDownloadAppBox().should('exist')
    })

    it('Next trip title should exist on page', () => {
        DashboardPO.getNextTripTitle().should('exist')
    })

    it('Save credit card should exist on page', () => {
        DashboardPO.getSaveCreditCard().should('exist')
    })

    it('Get Banner should exist on page', () => {
        DashboardPO.getBanner().should('exist')
    })

    it('Close banner button should exist on page', () => {
        DashboardPO.getCloseBannerButton().should('exist')
    })

    it('Learn more button should exist on page', () => {
        DashboardPO.getLearnMoreButton().should('exist')
    })

    it('Download app form should exist on page', () => {
        DashboardPO.getDownloadAppForm().should('exist')
    })
})