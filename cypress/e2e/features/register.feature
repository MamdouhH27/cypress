Feature: Register Functionality

  Scenario: Register page should open
    Given user opens register page
    Then register form should be visible

  Scenario: Register page fields should be visible
    Given user opens register page
    Then register submit button should be visible