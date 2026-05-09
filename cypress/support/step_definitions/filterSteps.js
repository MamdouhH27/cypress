import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("price filter should be visible", () => {
  cy.get('.ngx-slider').should('be.visible');
});

Then("sort dropdown should be visible", () => {
  cy.get('[data-test="sort"]').should('be.visible');
});