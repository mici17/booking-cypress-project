import {
    SettingsPagePo
} from '../../pageObjects/SettingsPage.po';
import {
    LoginPagePo
} from '../../../LoginPage/pageObjects/LoginPage.po';
import {
    CREDENTIALS
} from '../../../../config/credentials';
import {
    ProfilePagePo
} from '../../../ProfilePage/pageObjects/ProfilePage.po';


describe('Testing of elements existing on  Page', () => {
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
        SettingsPagePo
            .getControlButton()
            .eq(0)
            .click()
        SettingsPagePo
            .getAvatarForm()
            .should('exist')
        SettingsPagePo
            .getXButton()
            .click()
    })

    it('Display name can be changed', () => {
        SettingsPagePo
            .getNickname()
            .type('Prima17')
    })

    it('Birthday date can be changed', () => {
        SettingsPagePo
            .getBday()
            .select('25')
        SettingsPagePo
            .getBmonth()
            .select('May')
        SettingsPagePo
            .getByear()
            .select('1985')
    })

    it('Country can be changed', () => {
        SettingsPagePo
            .getNationality()
            .select('Montenegro')
    })
})