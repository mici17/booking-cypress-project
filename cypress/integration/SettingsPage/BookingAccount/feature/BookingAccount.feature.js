import {
    BookingAccountPo
} from '../pageObjects/BookingAccount.po';
import {
    LoginPagePo
} from '../../../LoginPage/pageObjects/LoginPage.po';
import {
    CREDENTIALS
} from '../../../../config/credentials';
import {
    ProfilePagePo
} from '../../../ProfilePage/pageObjects/ProfilePage.po';


describe('Testing of functionality on Settings Page - part Booking Account', () => {
    before(() => {
        LoginPagePo.visit()
        LoginPagePo.enterEmail(CREDENTIALS.EMAIL)
        LoginPagePo.enterPassword(CREDENTIALS.PASSWORD)
        ProfilePagePo
            .getUserName()
            .type('{enter}')
        ProfilePagePo
            .getSettings()
            .type('{enter}')
    })

    it('Profile picture can be changed', () => {
        BookingAccountPo
            .getControlButton()
            .eq(0)
            .click()
        BookingAccountPo
            .getAvatarForm()
            .should('exist')
        BookingAccountPo
            .getXButton()
            .click()
    })

    it('Display name can be changed', () => {
        BookingAccountPo
            .getNickname()
            .type('Prima17')
    })

    it('Birthday date can be changed', () => {
        BookingAccountPo
            .getBday()
            .select('25')
        BookingAccountPo
            .getBmonth()
            .select('May')
        BookingAccountPo
            .getByear()
            .select('1985')
    })

    it('Country can be changed', () => {
        BookingAccountPo
            .getNationality()
            .select('Montenegro')
    })
})