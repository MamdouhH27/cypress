class HomePage {

  visit() {
    cy.visit("/");
  }

  searchProduct(product) {

    cy.get('[data-test="search-query"]')
      .clear()
      .type(product);

    cy.get('[data-test="search-submit"]')
      .click();
  }

  verifyResults() {

    cy.get(".card-title")
      .should("have.length.greaterThan", 0);

  }
}

export default HomePage;