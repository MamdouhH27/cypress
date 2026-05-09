import {
  Given,
  Then
} from "@badeball/cypress-cucumber-preprocessor";

Given("user opens register page", () => {

  cy.visit("/auth/register");

});

Then("register form should be visible", () => {

  cy.get("form")
    .should("be.visible");

});

Then("register submit button should be visible", () => {

  cy.get('[data-test="register-submit"]')
    .should("be.visible");

});