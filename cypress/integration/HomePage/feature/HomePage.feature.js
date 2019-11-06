import {
    GlobalPO
} from '../../shared/Global.po';
import {
    HomePagePo
} from '../pageObjects/HomePage.po';


describe('Home Page functionalty tests', () => {
    before(() => {
        HomePagePo.visit()
    })

    it('Should show dropdown menu when currency selector is clicked', () => {
        HomePagePo
            .getCurrencySelector()
            .click()

        HomePagePo
            .getDropdownValutes()
            .should('be.visible')
    })

    it('Should redirect to login page when ulogujte se button is clicked', () => {
        HomePagePo
            .getLoginButton()
            .click()

        GlobalPO
            .getUrl()
            .should('include', '/account.booking.com/sign-in')
    })

    it('Should redirect to register page when registrujte se button is clicked', () => {
        HomePagePo.visit()

        HomePagePo
            .getRegisterButton()
            .click()

        GlobalPO
            .getUrl()
            .should('include', '/account.booking.com/register')
    })


})