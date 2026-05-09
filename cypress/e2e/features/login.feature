Feature: Login Functionality

  Scenario: Login page should have required fields
    Given user opens login page
    Then email field should be visible
    And password field should be visible
    And login button should be visible

  Scenario: Invalid login attempt
    Given user opens login page
    When user enters invalid credentials
    And clicks login button
    Then user should stay on login page

  Scenario: Login page loads successfully
    Given user opens login page
    Then login form should be visible