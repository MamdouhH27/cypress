Feature: Contact Functionality

  Scenario: Contact page should load
    Given user opens contact page
    Then contact form should be visible

  Scenario: Contact form fields should be visible
    Given user opens contact page
    Then contact submit button should be visible