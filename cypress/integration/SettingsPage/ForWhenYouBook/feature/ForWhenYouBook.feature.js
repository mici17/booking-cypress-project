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

describe('Testing of functionality on Settings Page - part For When You Book', () => {
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

    it('Title can be changed', () => {
        ForWhenYouBookPo
            .getUserTitle()
            .select('Mrs.')
    })

    it('First name can be changed', () => {
        ForWhenYouBookPo
            .getFirstname()
            .clear()
            .type('John')
        ForWhenYouBookPo
            .getFirstname()
            .should('have.value', 'John')
    })

    it('Last name can be changed', () => {
        ForWhenYouBookPo
            .getLastname()
            .clear()
            .type('Doe')

        ForWhenYouBookPo
            .getLastname()
            .should('have.value', 'Doe')
    })

    it('Phone number can be changed', () => {
        ForWhenYouBookPo
            .getPhone()
            .type('063-333-999')

        ForWhenYouBookPo
            .getPhone()
            .should('have.value', '063-333-999')
    })

    it('Email can be changed', () => {
        ForWhenYouBookPo
            .getEmail()
            .clear()
            .type('example@gmail.com')

        ForWhenYouBookPo
            .getEmail()
            .should('have.value', 'example@gmail.com')
    })

    it('Address form should be visible when change address button is clicked', () => {
        ForWhenYouBookPo
            .getChangeAddressButton()
            .click()

        ForWhenYouBookPo
            .getAddressForm()
            .should('be.visible')
    })


    it('Address can be changed', () => {
        ForWhenYouBookPo
            .getAddressInput()
            .eq(0)
            .type('Mileve Maric 4')

        ForWhenYouBookPo
            .getAddressInput()
            .eq(0)
            .should('have.value', 'Mileve Maric 4')
    })

    it('City can be changed', () => {
        ForWhenYouBookPo
            .getAddressInput()
            .eq(1)
            .type('Belgrade')

        ForWhenYouBookPo
            .getAddressInput()
            .eq(1)
            .should('have.value', 'Belgrade')
    })

    it('Country can be changed', () => {
        ForWhenYouBookPo
            .getAddressInput()
            .eq(2)
            .select('Argentina')

        ForWhenYouBookPo
            .getAddressInput()
            .eq(2)
            .should('have.value', 'ar')
    })

    it('ZIP code can be changed', () => {
        ForWhenYouBookPo
            .getAddressInput()
            .eq(3)
            .type('11000')

        ForWhenYouBookPo
            .getAddressInput()
            .eq(3)
            .should('have.value', '11000')
    })
})