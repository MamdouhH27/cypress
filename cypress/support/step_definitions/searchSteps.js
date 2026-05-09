import {
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pages/HomePage";

const homePage = new HomePage();

When("user searches for {string}", (product) => {
  homePage.searchProduct(product);
});

Then("search results should appear", () => {
  homePage.verifyResults();
});

Then("products related to {string} should appear", (product) => {
  cy.contains(new RegExp(product, "i"))
    .should("be.visible");
});