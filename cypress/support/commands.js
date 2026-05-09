// ─── visitToolshop ──────────────────────────────────────────────────────────
Cypress.Commands.add("visitToolshop", () => {
  cy.visit("https://practicesoftwaretesting.com/");
  cy.get('[data-test="nav-home"]').should("be.visible");
});

// ─── login ───────────────────────────────────────────────────────────────────
Cypress.Commands.add("login", (email, password) => {
  cy.session([email, password], () => {
    cy.visit("https://practicesoftwaretesting.com/auth/login");
    cy.get('[data-test="email"]').clear().type(email);
    cy.get('[data-test="password"]').clear().type(password);
    cy.get('[data-test="login-submit"]').click();
    cy.url({ timeout: 10000 }).should("include", "/account");
  }, {
    validate() {
      cy.visit("https://practicesoftwaretesting.com/account");
      cy.url().should("include", "/account");
    }
  });
});

// ─── searchProduct ───────────────────────────────────────────────────────────
Cypress.Commands.add("searchProduct", (term) => {
  cy.visit("https://practicesoftwaretesting.com");
  cy.get('[data-test="search-query"]').clear().type(term);
  cy.get('[data-test="search-submit"]').click();
  cy.get(".card-title", { timeout: 15000 }).should("have.length.greaterThan", 0);
});

// ─── addProductToCart ────────────────────────────────────────────────────────
Cypress.Commands.add("addProductToCart", (productName) => {
  cy.searchProduct(productName);
  cy.get(".card").contains(productName).click();
  cy.get('[data-test="add-to-cart"]').click();
  cy.get('[data-test="cart-quantity"]', { timeout: 10000 }).should(
    "not.have.text",
    "0",
  );
  Cypress.Commands.add("visitToolshop", () => {
  cy.visit("/");
});
});