Feature: Product Search

  Scenario: Search for Hammer
    Given user is on homepage
    When user searches for "Hammer"
    Then search results should appear

  Scenario: Search bar should work correctly
    Given user is on homepage
    When user searches for "Hammer"
    Then products related to "Hammer" should appear

  Scenario: Search for Pliers
    Given user is on homepage
    When user searches for "Pliers"
    Then products related to "Pliers" should appear