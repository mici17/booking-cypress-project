import {
    CREDENTIALS
} from '../../../config/credentials';
import {
    GlobalPO
} from '../../shared/Global.po';
import {
    LoginPagePo
} from '../../LoginPage/pageObjects/LoginPage.po';
import {
    ProfilePageNavigationPO
} from '../pageObjects/ProfilePageNavigation.po';
import {
    ProfilePagePo
} from '../../ProfilePage/pageObjects/ProfilePage.po';

describe('Navigation functionality tests', () => {
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

    it('Should navigate to Bookings page when bookings link is clicked', () => {
        ProfilePageNavigationPO.getBookingLink().click()
        GlobalPO.getUrl().should('include', '/myreservations')
    })

    it('Should navigate to My dashboard page when my dashboard link is clicked', () => {
        ProfilePageNavigationPO.getDashboardLink().click()
        GlobalPO.getUrl().should('include', '/mydashboard')
    })

    it('Should navigate to Reviews page when reviews link is clicked', () => {
        ProfilePageNavigationPO.getReviewsLink().click()
        GlobalPO.getUrl().should('include', '/reviewtimeline')
    })

    it('Should navigate to Settings page when settings link is clicked', () => {
        ProfilePageNavigationPO.getSettingsLink().eq(3).click()
        GlobalPO.getUrl().should('include', '/mysettings')
    })

    it('Should navigate to Communities page when travel communities link is clicked', () => {
        ProfilePageNavigationPO.getSettingsLink().click()
        GlobalPO.getUrl().should('include', '/communities')
    })
})