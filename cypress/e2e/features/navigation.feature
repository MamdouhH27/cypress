Feature: Navigation Functionality

  Scenario: Homepage loads correctly
    Given user is on homepage
    Then navigation bar should be visible

  Scenario: Category navigation works
    Given user is on homepage
    When user opens categories
    And selects hand tools category
    Then hand tools page should open

  Scenario: Homepage navigation elements should appear
    Given user is on homepage
    Then home button should be visible
    And categories button should be visible
    And search bar should be visible