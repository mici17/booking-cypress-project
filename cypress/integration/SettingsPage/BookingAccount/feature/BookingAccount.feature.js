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
            .clear()
            .type('Prima17')
        BookingAccountPo
            .getNickname()
            .should('have.value', 'Prima17')
    })

    it('Birthday day can be changed', () => {
        BookingAccountPo
            .getBday()
            .select('25')
        BookingAccountPo
            .getBday()
            .should('have.value','25')
        BookingAccountPo
            .getBmonth()
            .select('May')
        BookingAccountPo
            .getByear()
            .select('1985')
    })

    it('Birthday month can be changed', () => {
        BookingAccountPo
            .getBmonth()
            .select('May')
        BookingAccountPo
            .getBmonth()
            .should('have.value','5')
    })

    it('Birthday year can be changed', () => {
        BookingAccountPo
            .getByear()
            .select('1985')
        BookingAccountPo
            .getByear()
            .should('have.value','1985')
    })

    it('Country can be changed', () => {
        BookingAccountPo
            .getNationality()
            .select('Montenegro')
        BookingAccountPo
            .getNationality()
            .should('have.value', 'me')
    })
})