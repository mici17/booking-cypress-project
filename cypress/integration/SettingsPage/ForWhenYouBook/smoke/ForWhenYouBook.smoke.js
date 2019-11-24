import {
    ForWhenYouBookPo
} from '../pageObjects/ForWhenYouBook.po';
import {
    LoginPagePo
} from '../../../LoginPage/pageObjects/LoginPage.po';
import {
    CREDENTIALS
} from '../../../../config/credentials';
import {
    ProfilePagePo
} from '../../../ProfilePage/pageObjects/ProfilePage.po';

describe('Testing of elements existing on Settings Page - part For When You Book', () => {
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

    it('Head title should exist on page', () => {
        ForWhenYouBookPo.getHeadTitle().should('exist')
    })

    it('Head subtitle should exist on page', () => {
        ForWhenYouBookPo.getHeadSubtitle().should('exist')
    })

    it('Title input should exist on page', () => {
        ForWhenYouBookPo.getUserTitle().should('exist')
    })

    it('Firstname input should exist on page', () => {
        ForWhenYouBookPo.getFirstname().should('exist')
    })

    it('Lastname input should exist on page', () => {
        ForWhenYouBookPo.getLastname().should('exist')
    })

    it('Phone input should exist on page', () => {
        ForWhenYouBookPo.getPhone().should('exist')
    })

    it('Email input should exist on page', () => {
        ForWhenYouBookPo.getEmail().should('exist')
    })

    it('Change address button should exist on page', () => {
        ForWhenYouBookPo.getChangeAddressButton().should('exist')
    })
})