/// <reference types="cypress"/>

describe("contact us page", () => {
  it("should have name, subject, phone and message inputs", () => {
      cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/contactus.html");
      cy.get('#name').should('exist');
      cy.get('#subject').should('exist');
      cy.get('#phone').should('exist');
      cy.get('#message').should('exist');
  });

  it("shouln't load in case of empty form", () => {
    cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/contactus.html");
    cy.get('.contactUs-button').focus().click({force: true});
    cy.url().should('eq', "https://rodcar.github.io/shelter-pet-tinder-front-end/contactus.html")
  });

  it("should show validation message", () => {
    cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/contactus.html");
    cy.get('.contactUs-button').focus().click({force: true});
    cy.get('#name').then(($input) => {
      expect($input[0].validationMessage).to.have.length.least(1);
    });
    cy.get('#name').type("Ivan Rodriguez");
    cy.get('.contactUs-button').focus().click({force: true});
    cy.get('#subject').then(($input) => {
      expect($input[0].validationMessage).to.have.length.least(1);
    });
    cy.get('#subject').type("Question about adoption");
    cy.get('.contactUs-button').focus().click({force: true});
    cy.get('#phone').then(($input) => {
      expect($input[0].validationMessage).to.have.length.least(1);
    });
    cy.get('#phone').type("51950302674");
    cy.get('.contactUs-button').focus().click({force: true});
    cy.get('#message').then(($input) => {
      expect($input[0].validationMessage).to.have.length.least(1);
    });
  });

  it("should load a post message", () => {
    cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/contactus.html");
    cy.get('#name').type("Ivan Rodriguez", {force: true});
    cy.get('.contactUs-button').focus().click({force: true});
    cy.get('#subject').then(($input) => {
      expect($input[0].validationMessage).to.have.length.least(1);
    });
    cy.get('#subject').type("Question about adoption");
    cy.get('.contactUs-button').focus().click({force: true});
    cy.get('#phone').then(($input) => {
      expect($input[0].validationMessage).to.have.length.least(1);
    });
    cy.get('#phone').type("51950302674");
    cy.get('.contactUs-button').focus().click({force: true});
    cy.get('#message').then(($input) => {
      expect($input[0].validationMessage).to.have.length.least(1);
    });
    cy.get('#message').type("I have a question about adoption. I have a...");
    const stub = cy.stub().as('open');
    /*cy.on('window:before:load', (win) => {
      cy.stub(win, 'open').callsFake(stub)
    });*/
    cy.get('.contactUs-button').focus().click({force: true});
    cy.url().should('eq', 'https://rodcar.github.io/shelter-pet-tinder-front-end/contactus_answer.html');
  });
});