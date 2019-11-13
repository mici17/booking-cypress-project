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
import {
    GlobalPO
} from '../../shared/Global.po';

describe('Testing Dashboard Page functionality', () => {
    beforeEach(() => {
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

    it('Should redirect to home page when find details link is clicked', () => {
        DashboardPO.getFindDeals().click()
        GlobalPO.getUrl().should('include', 'booking.com/')
    })

    it('Should redirect to settings page when add details link is clicked', () => {
        DashboardPO.getAddDetails().click()
        GlobalPO.getUrl().should('include', '/mysettings')
    })

    // it('Should redirect to app download page when download app link is clicked', () => {
    //     DashboardPO.getDownloadAppBox().click()
    //     GlobalPO.getUrl().should('include', 'booking.com/apps')
    // })

    it('Should redirect to settings page when save credit card link is clicked', () => {
        DashboardPO.getSaveCreditCard().click()
        GlobalPO.getUrl().should('include', '/mysettings')
    })

    it('Should close banner when x button is clicked', () => {
        DashboardPO.getCloseBannerButton().click()
        DashboardPO.getBanner().should('not.be.visible')
    })
})