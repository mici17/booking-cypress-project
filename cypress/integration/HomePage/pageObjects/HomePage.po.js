const SELECTORS = Object.freeze({
    LOGOIMAGE: '#logo_no_globe_new_logo',
    CURRENCYSELECTOR: '[data-id=currency_selector]',
    DROPDOWNVALUTES: '.uc_currency',
    LANGUAGESELECTOR: '[data-id=language_selector]',
    ANIMATIONSPAN: '.add-property-button-animation-text',
    REGISTERBUTTON: '#current_account_create',
    LOGINBUTTON: '#current_account',
    SEARCHBOXTITLE: '.sb-searchbox__title',
    SEARCHBOXSUBTITLE: '.sb-searchbox__subtitle-text',
    DESTINATIONINPUT: '#ss',
    DESTINATIONLIST: '.sb-autocomplete__list',
    DATEINPUT: '.xp__dates',
    CALENDAR: '.bui-calendar',
    CALENDARCHECKINDATE: '.bui-calendar__date--selected',
    CALENDARCHECKOUTDATE: '.bui-calendar__date--in-range',
    CALENDARROW: '.bui-calendar__row',
    DATECHECKIN: '.sb-date-field__display',
    DATECHECKOUT: '.sb-date-field__display',
    NEXTMONTHARROW: '.bui-calendar__control--next',
    PREVIOUSMONTHARROW: '.bui-calendar__control--prev',
    GUESTSINPUT: '#xp__guests__toggle',
    GUESTSINPUTCONTAINER: '#xp__guests__inputs-container',
    ADULTSMINUSBUTTON: '.sb-group__field-adults .bui-stepper__subtract-button',
    ADULTSPLUSBUTTON: '.sb-group__field-adults .bui-stepper__add-button',
    ADULTSNUMBER: '.sb-group__field-adults .bui-stepper__display',
    CHILDRENMINUSBUTTON: '.sb-group-children .bui-stepper__subtract-button',
    CHILDRENPLUSBUTTON: '.sb-group-children .bui-stepper__add-button',
    CHILDRENNUMBER: '.sb-group-children .bui-stepper__display',
    CHILDRENAGECONTAINER: '.sb-group__children__field.clearfix',
    CHILDRENAGEINPUT: '.sb-group__children__field.clearfix select',
    ROOMSMINUSBUTTON: '.sb-group__field-rooms .bui-stepper__subtract-button',
    ROOMSPLUSBUTTON: '.sb-group__field-rooms .bui-stepper__add-button',
    ROOMSNUMBER: '.sb-group__field-rooms .bui-stepper__display',
    SEARCHBUTTON: '.sb-searchbox__button',
    TRAVELPURPOSECHECKBOX: '#sb_travel_purpose_checkbox'
})

class HomePagePageObjects {

    visit() {
        cy.visit('https://www.booking.com/index.sr.html')
    }

    getLogoImage() {
        cy.get(SELECTORS.LOGOIMAGE)
    }

    getCurrencySelector() {
        return cy.get(SELECTORS.CURRENCYSELECTOR)
    }

    getDropdownValutes() {
        return cy.get(SELECTORS.DROPDOWNVALUTES)
    }

    getLanguageSelector() {
        return cy.get(SELECTORS.LANGUAGESELECTOR)
    }

    getAnimationSpan() {
        cy.get(SELECTORS.ANIMATIONSPAN)
    }

    getRegisterButton() {
        return cy.get(SELECTORS.REGISTERBUTTON)
    }

    getLoginButton() {
        return cy.get(SELECTORS.LOGINBUTTON)
    }

    getSearchboxTitle() {
        return cy.get(SELECTORS.SEARCHBOXTITLE)
    }

    getSearchboxSubtitle() {
        return cy.get(SELECTORS.SEARCHBOXSUBTITLE)
    }

    getDestinationInput() {
        return cy.get(SELECTORS.DESTINATIONINPUT)
    }

    getDestinationList() {
        return cy.get(SELECTORS.DESTINATIONLIST)
    }

    getDateInput() {
        return cy.get(SELECTORS.DATEINPUT)
    }

    getCalendar() {
        return cy.get(SELECTORS.CALENDAR)
    }

    pickDate(date) {
        return cy
            .get(SELECTORS.CALENDARROW)
            .contains(date)
            .click()
    }

    getCalendarCheckinDate() {
        return cy.get(SELECTORS.CALENDARCHECKINDATE)
    }

    getCalendarCheckoutDate() {
        return cy.get(SELECTORS.CALENDARCHECKOUTDATE)
    }

    getCheckInDate() {
        return cy.get(SELECTORS.DATECHECKIN)
    }

    getCheckOutDate() {
        return cy.get(SELECTORS.DATECHECKOUT)
    }

    getGuestsInput() {
        return cy.get(SELECTORS.GUESTSINPUT)
    }

    getGuestsInformationTable() {
        return cy.get(SELECTORS.GUESTSINPUTCONTAINER)
    }

    getAdultsMinusButton() {
        return cy.get(SELECTORS.ADULTSMINUSBUTTON)
    }

    getAdultsPlusButton() {
        return cy.get(SELECTORS.ADULTSPLUSBUTTON)
    }

    getNumberOfAdults() {
        return cy.get(SELECTORS.ADULTSNUMBER)
    }

    getChildrenMinusButton() {
        return cy.get(SELECTORS.CHILDRENMINUSBUTTON)
    }

    getChildrenPlusButton() {
        return cy.get(SELECTORS.CHILDRENPLUSBUTTON)
    }

    getChildrenAgeContainer() {
        return cy.get(SELECTORS.CHILDRENAGECONTAINER)
    }

    getChildrenAgeInput() {
        return cy.get(SELECTORS.CHILDRENAGEINPUT)
    }

    getNumberOfChildren() {
        return cy.get(SELECTORS.CHILDRENNUMBER)
    }

    getRoomsMinusButton() {
        return cy.get(SELECTORS.ROOMSMINUSBUTTON)
    }

    getRoomsPlusButton() {
        return cy.get(SELECTORS.ROOMSPLUSBUTTON)
    }

    getNumberOfRooms() {
        return cy.get(SELECTORS.ROOMSNUMBER)
    }

    getSearchButton() {
        return cy.get(SELECTORS.SEARCHBUTTON)
    }

    getTravelPurposeCheckbox() {
        return cy.get(SELECTORS.TRAVELPURPOSECHECKBOX)
    }
}

export const HomePagePo = new HomePagePageObjects()