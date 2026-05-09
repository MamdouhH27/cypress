import {
  Given,
  Then
} from "@badeball/cypress-cucumber-preprocessor";

Given("user opens contact page", () => {

  cy.visit("/contact");

});

Then("contact form should be visible", () => {

  cy.get("form")
    .should("be.visible");

});

Then("contact submit button should be visible", () => {

  cy.get('[data-test="contact-submit"]')
    .should("be.visible");

});