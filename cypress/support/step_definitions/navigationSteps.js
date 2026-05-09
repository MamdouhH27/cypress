import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";

Given("navigation bar should be visible", () => {

  cy.get('[data-test="nav-categories"]')
    .should("be.visible");

});

When("user opens categories", () => {

  cy.get('[data-test="nav-categories"]')
    .click();

});

When("selects hand tools category", () => {

  cy.get('[data-test="nav-hand-tools"]')
    .click();

});

Then("hand tools page should open", () => {

  cy.url().should("include", "hand-tools");

});

Then("home button should be visible", () => {

  cy.get('[data-test="nav-home"]')
    .should("be.visible");

});

Then("categories button should be visible", () => {

  cy.get('[data-test="nav-categories"]')
    .should("be.visible");

});

Then("search bar should be visible", () => {

  cy.get('[data-test="search-query"]')
    .should("be.visible");

});