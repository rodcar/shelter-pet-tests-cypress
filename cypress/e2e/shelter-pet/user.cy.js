/// <reference types="cypress"/>

describe("login page", () => {

    beforeEach(() => {
        cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/login.html");
    });

    it("should validate empty email", () => {
        cy.get('#sign-in-button').click({force:true});
        cy.get('#err-message').should('have.text', 'The email is empty');
    });

    it("should validate invalid email", () => {
        cy.get('#email').type("notemail", {force: true});
        cy.get('#sign-in-button').click({force:true});
        cy.get('#err-message').should('have.text', 'The email is not valid');
    });

    it("should validate empty password", () => {
        cy.get('#email').type("nnrodcar@gmail.com", {force: true});
        cy.get('#sign-in-button').click({force:true});
        cy.get('#err-message').should('have.text', 'The password is empty');
    });

    it("should validate invalid password", () => {
        cy.get('#email').type("nnrodcar@gmail.com", {force: true});
        cy.get('#password').type("1234", {force: true});
        cy.get('#sign-in-button').click({force:true});
        cy.get('#err-message').should('have.text', 'The password is not valid');
    });

    it("should validate the user doesn't exist", () => {
        cy.get('#email').type("nnrodcar70000_not_register@gmail.com", {force: true});
        cy.get('#password').type("12345678", {force: true});
        cy.get('#sign-in-button').click({force:true});
        cy.get('#err-message').should('have.text', 'The email is not registered');
    });

    it("should sign in successfully", () => {
        cy.get('#email').type("nnrodcar@gmail.com", {force: true});
        cy.get('#password').type("12345678", {force: true});
        cy.get('#sign-in-button').click({force:true});
        cy.url().should('eq', 'https://rodcar.github.io/shelter-pet-tinder-front-end/index.html');
    });
});

describe("registration page", () => {

    beforeEach(() => {
        cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/login.html");
        cy.get('#sign-up').click({force: true});
    });

    it("should validate empty full name", () => {
        cy.get('#sign-up-submit').click({force:true});
        cy.get('#err-message-sign-up').should('have.text', 'Full Name is empty');
    });

    it("should validate empty email", () => {
        cy.get('#sign-up-fullname').type(cy.faker.name.findName(), {force: true});
        cy.get('#sign-up-submit').click({force:true});
        cy.get('#err-message-sign-up').should('have.text', 'Email is empty');
    });

    it("should validate invalid email", () => {
        cy.get('#sign-up-fullname').type(cy.faker.name.findName(), {force: true});
        cy.get('#sign-up-email').type("notemail", {force: true});
        cy.get('#sign-up-submit').click({force:true});
        cy.get('#err-message-sign-up').should('have.text', 'The email is not valid');
    });

    it("should validate email is already registered", () => {
        cy.get('#sign-up-fullname').type(cy.faker.name.findName(), {force: true});
        cy.get('#sign-up-email').type("nnrodcar@gmail.com", {force: true});
        cy.get('#sign-up-submit').click({force:true});
        cy.get('#err-message-sign-up').should('have.text', 'Email is already registered');
    });    

    it("should validate empty phone", () => {
        cy.get('#sign-up-fullname').type(cy.faker.name.findName(), {force: true});
        cy.get('#sign-up-email').type(cy.faker.internet.email(), {force: true});
        cy.get('#sign-up-submit').click({force:true});
        cy.get('#err-message-sign-up').should('have.text', 'The phone Number is empty');
    });

    it("should validate empty password", () => {
        cy.get('#sign-up-fullname').type(cy.faker.name.findName(), {force: true});
        cy.get('#sign-up-email').type(cy.faker.internet.email(), {force: true});
        cy.get('#sign-up-phone').type(cy.faker.phone.phoneNumber('501######'), {force: true});
        cy.get('#sign-up-submit').click({force:true});
        cy.get('#err-message-sign-up').should('have.text', 'The password is empty');
    });

    it("should validate invalid password", () => {
        cy.get('#sign-up-fullname').type(cy.faker.name.findName(), {force: true});
        cy.get('#sign-up-email').type(cy.faker.internet.email(), {force: true});
        cy.get('#sign-up-phone').type(cy.faker.phone.phoneNumber('501######'), {force: true});
        cy.get('#sign-up-password').type("1234567", {force: true});
        cy.get('#sign-up-submit').click({force:true});
        cy.get('#err-message-sign-up').should('have.text', 'The password must be at least 8 characters long');
    });

    it("should sign up successfully", () => {
        cy.get('#sign-up-fullname').type(cy.faker.name.findName(), {force: true});
        cy.get('#sign-up-email').type(cy.faker.internet.email(), {force: true});
        cy.get('#sign-up-phone').type(cy.faker.phone.phoneNumber('501######'), {force: true});
        cy.get('#sign-up-password').type("12345678", {force: true});
        cy.get('#sign-up-submit').click({force:true});
        cy.url().should('eq', 'https://rodcar.github.io/shelter-pet-tinder-front-end/index.html');
    });

    /*it("should show empty email", () => {
        cy.get('#sign-up-fullname')
        cy.get('#sign-up-email')
        cy.get('#sign-up-phone')
        cy.get('#sign-up-password')
        "#err-message-sign-up"
    });*/
});