describe("Practice Software Testing - Toolshop Tests", () => {
  beforeEach(() => {
    cy.visitToolshop();
  });

  it("TC-01: Homepage loads correctly", () => {
    cy.url().should("include", "practicesoftwaretesting.com");
    cy.title().should("contain", "Toolshop");
    cy.get('[data-test="nav-categories"]').should("be.visible");
  });

  it("TC-02: login page should have all required fields", () => {
  cy.visit("https://practicesoftwaretesting.com/auth/login");
  cy.url().should("include", "/auth/login");
  cy.get('[data-test="email"]').should("be.visible");
  cy.get('[data-test="password"]').should("be.visible");
  cy.get('[data-test="login-submit"]').should("be.visible");
  cy.get("body").should("be.visible");
});

it("TC-03: should stay on login page with invalid credentials", () => {
  cy.visit("https://practicesoftwaretesting.com/auth/login");
  cy.get('[data-test="email"]').clear().type("wrong@example.com");
  cy.get('[data-test="password"]').clear().type("wrongpassword");
  cy.get('[data-test="login-submit"]').click();
  cy.url().should("include", "/auth/login");
  cy.get("body").should("be.visible");
});

 it("TC-04: should search for a product successfully", () => {
  cy.fixture("products").then((data) => {
    cy.visit("https://practicesoftwaretesting.com");
    cy.get('[data-test="search-query"]').clear().type(data.searchTerm);
    cy.get('[data-test="search-submit"]').click();
    cy.get(".card-title", { timeout: 15000 }).should("have.length.greaterThan", 0);
    cy.get("body").should("be.visible");
  });
});

it("TC-05: search bar should be functional on homepage", () => {
  cy.visit("https://practicesoftwaretesting.com/");
  cy.get('[data-test="search-query"]').should("be.visible").type("Hammer");
  cy.get('[data-test="search-submit"]').click();
  cy.get(".card-title", { timeout: 15000 }).should("have.length.greaterThan", 0);
  cy.get("body").should("be.visible");
});

it("TC-06: Category navigation", () => {
  cy.get('[data-test="nav-categories"]').click();
  cy.get('[data-test="nav-hand-tools"]').click();
  cy.url().should("include", "category");
  cy.url().should("include", "hand-tools");
  cy.get("body").should("be.visible");
});

  it("TC-07: Contact page should load with form", () => {
    cy.get('[data-test="nav-contact"]').click();
    cy.url().should("include", "contact");
    cy.get("form").should("be.visible");
    cy.get('[data-test="contact-submit"]').should("exist");
  });

it("TC-08: Contact page form fields should be visible", () => {
  cy.visit("https://practicesoftwaretesting.com/contact");
  cy.url().should("include", "contact");
  cy.get("form").should("be.visible");
  cy.get('[data-test="contact-submit"]').should("exist");
  cy.get("body").should("be.visible");
});

it("TC-09: homepage should load with navigation", () => {
  cy.visit("https://practicesoftwaretesting.com/");
  cy.get('[data-test="nav-home"]').should("be.visible");
  cy.get('[data-test="nav-categories"]').should("be.visible");
  cy.get('[data-test="search-query"]').should("be.visible");
  cy.get("body").should("be.visible");
});

  it("TC-10: Register page should be accessible", () => {
    cy.visit("https://practicesoftwaretesting.com/auth/register");
    cy.url().should("include", "register");
    cy.get("form").should("be.visible");
    cy.get('[data-test="register-submit"]').should("exist");
  });

  it("TC-11: Price range filter should be visible", () => {
    cy.get(".ngx-slider").should("be.visible");
    cy.get(".card").should("have.length.greaterThan", 0);
    cy.get("body").should("be.visible");
  });

  it("TC-12: Sort section should be visible", () => {
    cy.get('[data-test="sort"]').should("be.visible");
    cy.get(".card").should("have.length.greaterThan", 0);
    cy.get("body").should("be.visible");
  });

  it("TC-13: Login page should have required fields", () => {
    cy.visit("https://practicesoftwaretesting.com/auth/login");
    cy.get('[data-test="email"]').should("be.visible");
    cy.get('[data-test="password"]').should("be.visible");
    cy.get('[data-test="login-submit"]').should("be.visible");
  });

  it("TC-14: Search with 'Pliers' should show results", () => {
  cy.visit("/");
  cy.get('[data-test="search-query"]').clear().type("Pliers");
  cy.get('[data-test="search-submit"]').click();
  
  // Use .card or .card-title instead
  cy.get(".card", { timeout: 10000 }).should("have.length.greaterThan", 0);
  cy.contains(/pliers/i).should("be.visible");
});

it("TC-15: register page should have all required fields", () => {
  cy.visit("https://practicesoftwaretesting.com/auth/register");
  cy.url().should("include", "register");
  cy.get("form").should("be.visible");
  cy.get('[data-test="register-submit"]').should("exist");
  cy.get("body").should("be.visible");
});
});