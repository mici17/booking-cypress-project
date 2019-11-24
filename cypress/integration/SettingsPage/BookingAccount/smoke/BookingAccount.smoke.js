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


describe('Testing of elements existing on Settings Page - part Booking Account', () => {
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

    it('Title should exist on page', () => {
        BookingAccountPo.getHeadTitle().should('exist')
    })

    it('Subtitle should exist on page', () => {
        BookingAccountPo.getHeadSubtitle().should('exist')
    })

    it('Label profile picture should exist on page', () => {
        BookingAccountPo.getLabel().eq(0).should('exist')
    })

    it('Avatar should exist on page', () => {
        BookingAccountPo.getAvatarImage().should('exist')
    })

    it('Control button should exist on page', () => {
        BookingAccountPo.getControlButton().should('exist')
    })

    it('Legend should exist on page', () => {
        BookingAccountPo.getLegendItem().eq(0).should('exist')
    })

    it('Label display name should exist on page', () => {
        BookingAccountPo.getLabel().eq(1).should('exist')
    })

    it('Input nickname should exist on page', () => {
        BookingAccountPo.getNickname().should('exist')
    })

    it('Legend should exist on page', () => {
        BookingAccountPo.getLegendItem().eq(1).should('exist')
    })

    it('Label birthday should exist on page', () => {
        BookingAccountPo.getLabel().eq(2).should('exist')
    })

    it('Input bday exist on page', () => {
        BookingAccountPo.getBday().should('exist')
    })

    it('Input bmonth exist on page', () => {
        BookingAccountPo.getBmonth().should('exist')
    })

    it('Input byear exist on page', () => {
        BookingAccountPo.getByear().should('exist')
    })

    it('Legend should exist on page', () => {
        BookingAccountPo.getLegendItem().eq(2).should('exist')
    })

    it('Label country should exist on page', () => {
        BookingAccountPo.getLabel().eq(3).should('exist')
    })

    it('Input nationality exist on page', () => {
        BookingAccountPo.getNationality().should('exist')
    })

    it('Legend should exist on page', () => {
        BookingAccountPo.getLegendItem().eq(3).should('exist')
    })





})