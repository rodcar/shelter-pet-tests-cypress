/// <reference types="cypress"/>

describe("submit a pet page", () => {
    it("should have the defined inputs", () => {
        cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/submit_a_pet.html");
        cy.get('input[name="name"]').should("exist");
        cy.get('input[name="location"]').should("exist");
        cy.get('input[name="phone"]').should("exist");
        cy.get('select[name="type"]').should("exist");
        cy.get('input[name="petsname"]').should("exist");
        cy.get('input[name="petsage"]').should("exist");
        cy.get('input[name="breed"]').should("exist");
        cy.get('#addapic').should("exist");
        cy.get('textarea[name="bioinfo"]').should("exist");
    });

    it("should submit a pet successfully", () => {
        cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/login.html");
        cy.get('#email').type("nnrodcar@gmail.com", {force: true});
        cy.get('#password').type("12345678", {force: true});
        cy.get('#sign-in-button').click({force:true});
        cy.url().should('eq', 'https://rodcar.github.io/shelter-pet-tinder-front-end/index.html');
        cy.visit("https://rodcar.github.io/shelter-pet-tinder-front-end/submit_a_pet.html");
        cy.get('input[name="name"]').focus().type(cy.faker.name.findName());
        cy.get('input[name="location"]').focus().type(cy.faker.address.city());
        cy.get('input[name="phone"]').focus().type(cy.faker.phone.phoneNumber('501-###-###'));
        cy.get('select[name="type"]').select('Cat', {force: true});
        cy.get('input[name="petsname"]').focus().type(cy.faker.name.firstName());
        cy.get('input[name="petsage"]').focus().type("1 year");
        cy.get('input[name="breed"]').focus().type(cy.faker.animal.cat());
        cy.get('#addapic').selectFile("cypress/fixtures/cat.png", {force: true});
        cy.wait(5000);
        cy.get('textarea[name="bioinfo"]').focus().type(cy.faker.lorem.paragraph());
        cy.get('.checkbox-rect2 > label').click({force: true});
        // review it, it looks like sometimes it fails
        cy.get('#submit-a-pet-form').submit({force: true});
        /*cy.intercept('POST','https://shelterpet-api.herokuapp.com/pets/').as('petSubmit');
        cy.wait('@petSubmit');*/
        //cy.wait(1000);
        //cy.get('h1').should('have.text', 'Success!');
        cy.url().should('eq', 'https://rodcar.github.io/shelter-pet-tinder-front-end/submit_a_pet_post_message.html');
    });    
});