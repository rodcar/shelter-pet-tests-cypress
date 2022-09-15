/// <reference types="cypress"/>

describe("adoption list", () => {

    it("visit the adoption page", () => {
        cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/adoption.html");
    });

    it("should have a pet name loaded", () => {
        cy.intercept('https://shelterpet-api.herokuapp.com/pets/', (req) =>{
            req.responseTimeout= 20000;
        }).as('petList');
        cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/adoption.html");
        cy.wait('@petList');
        cy.get(".pet-name").should("have.length.least", 1);        
    });
});