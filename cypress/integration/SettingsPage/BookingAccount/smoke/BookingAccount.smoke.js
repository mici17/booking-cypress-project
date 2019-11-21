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

    it('Title should exist on page', () => {
        SettingsPagePo.getHeadTitle().should('exist')
    })

    it('Subtitle should exist on page', () => {
        SettingsPagePo.getHeadSubtitle().should('exist')
    })

    it('Label profile picture should exist on page', () => {
        SettingsPagePo.getLabel().eq(0).should('exist')
    })

    it('Avatar should exist on page', () => {
        SettingsPagePo.getAvatar().should('exist')
    })

    it('Control button should exist on page', () => {
        SettingsPagePo.getControlButton().should('exist')
    })

    it('Legend should exist on page', () => {
        SettingsPagePo.getLegendItem().eq(0).should('exist')
    })

    it('Label display name should exist on page', () => {
        SettingsPagePo.getLabel().eq(1).should('exist')
    })

    it('Input nickname should exist on page', () => {
        SettingsPagePo.getNickname().should('exist')
    })

    it('Legend should exist on page', () => {
        SettingsPagePo.getLegendItem().eq(1).should('exist')
    })

    it('Label birthday should exist on page', () => {
        SettingsPagePo.getLabel().eq(2).should('exist')
    })

    it('Input bday exist on page', () => {
        SettingsPagePo.getBday().should('exist')
    })

    it('Input bmonth exist on page', () => {
        SettingsPagePo.getBmonth().should('exist')
    })

    it('Input byear exist on page', () => {
        SettingsPagePo.getByear().should('exist')
    })

    it('Legend should exist on page', () => {
        SettingsPagePo.getLegendItem().eq(2).should('exist')
    })

    it('Label country should exist on page', () => {
        SettingsPagePo.getLabel().eq(3).should('exist')
    })

    it('Input nationality exist on page', () => {
        SettingsPagePo.getNationality().should('exist')
    })

    it('Legend should exist on page', () => {
        SettingsPagePo.getLegendItem().eq(3).should('exist')
    })





})