import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

Given("user opens login page", () => {

  loginPage.visit();

});

When("user enters invalid credentials", () => {

  cy.fixture("users").then((data) => {

    loginPage.enterEmail(
      data.invalidUser.email
    );

    loginPage.enterPassword(
      data.invalidUser.password
    );

  });

});

When("clicks login button", () => {

  loginPage.clickLogin();

});

Then("user should stay on login page", () => {

  cy.url().should("include", "/auth/login");

});

Then("email field should be visible", () => {

  cy.get('[data-test="email"]')
    .should("be.visible");

});

Then("password field should be visible", () => {

  cy.get('[data-test="password"]')
    .should("be.visible");

});

Then("login button should be visible", () => {

  cy.get('[data-test="login-submit"]')
    .should("be.visible");

});

Then("login form should be visible", () => {

  cy.get("form")
    .should("be.visible");

});