const SELECTORS = Object.freeze({
    NAVBAR: '.profile-area__nav-wrapper',
    MYDASHBOARDLINK: '.selected',
    BOOKINGLINK: '.guides--bookings',
    REVIEWSLINK: '.guides--reviews',
    SETTINGSLINK: '.js-insiderguides-track',
    LISTYOURPROPERTYLINK: '.profile-area__nav-item-myreferrals',
    TRAVELCOMMUNITIESLINK: '.profile_menu__item--travel-communities'
})

class ProfilePageNavigationPageObjects {

    getNavbar() {
        return cy.get(SELECTORS.NAVBAR)
    }

    getDashboardLink() {
        return cy.get(SELECTORS.MYDASHBOARDLINK)
    }

    getBookingLink() {
        return cy.get(SELECTORS.BOOKINGLINK)
    }

    getReviewsLink() {
        return cy.get(SELECTORS.REVIEWSLINK)
    }

    getSettingsLink() {
        return cy.get(SELECTORS.SETTINGSLINK)
    }

    getListYourPropertyLink() {
        return cy.get(SELECTORS.LISTYOURPROPERTYLINK)
    }

    getTravelCommunitiesLink() {
        return cy.get(SELECTORS.TRAVELCOMMUNITIESLINK)
    }
}

export const ProfilePageNavigationPO = new ProfilePageNavigationPageObjects()