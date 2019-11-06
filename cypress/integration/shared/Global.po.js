class GlobalPageObject {
    getUrl() {
        return cy.url();
    }
}

export const GlobalPO = new GlobalPageObject();