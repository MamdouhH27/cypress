import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("user is on homepage", () => {
  cy.visit("/");
});