const SELECTORS = Object.freeze({
    PROFILECARD: '.acc-profile-card',
    TITLE: '.profile-content-card__title',
    ACTIONPANEL: '.action_panel-main',
    SEARCHBOX: '#frm',
    FINDTHEBESTDEALS: '.action_panel--mainoptions_links',
    ADDDETAILS: '.action_panel--mainoptions_links',
    DOWNLOADTHEAPP: '.action_panel--mainoptions_links',
    SAVEACREDITCARD: '.b-popular_item',
    BANNER: '.bui-banner',
    CLOSEBANNERBUTTON: '#join_index_banner_close',
    LEARNMOREBUTTON: '.bui-banner__button',
    DOWNLOADAPP: '.download_app_cta'
})

class DashboardPagePageObjects {

    getProfileCard() {
        return cy.get(SELECTORS.PROFILECARD)
    }

    getProfileTitle() {
        return cy.get(SELECTORS.TITLE).eq(0)
    }

    getActionPanel() {
        return cy.get(SELECTORS.ACTIONPANEL)
    }

    getSearchBox() {
        return cy.get(SELECTORS.SEARCHBOX)
    }

    getFindDeals() {
        return cy.get(SELECTORS.FINDTHEBESTDEALS).eq(0)
    }

    getAddDetails() {
        return cy.get(SELECTORS.ADDDETAILS).eq(1)
    }

    getDownloadAppBox() {
        return cy.get(SELECTORS.DOWNLOADTHEAPP).eq(2)
    }

    getNextTripTitle() {
        return cy.get(SELECTORS.TITLE).eq(1)
    }

    getSaveCreditCard() {
        return cy.get(SELECTORS.SAVEACREDITCARD)
    }

    getBanner() {
        return cy.get(SELECTORS.BANNER)
    }

    getCloseBannerButton() {
        return cy.get(SELECTORS.CLOSEBANNERBUTTON)
    }

    getLearnMoreButton() {
        return cy.get(SELECTORS.LEARNMOREBUTTON)
    }

    getGetAppTitle() {
        return cy.get(SELECTORS.TITLE).eq(2)
    }

    getDownloadAppForm() {
        return cy.get(SELECTORS.DOWNLOADAPP)
    }

}

export const DashboardPO = new DashboardPagePageObjects()