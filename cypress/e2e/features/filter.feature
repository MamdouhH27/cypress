Feature: Product Filters

  Background:
    Given user is on homepage

  Scenario: Price range filter should be visible
    Then price filter should be visible

  Scenario: Sort section should be visible
    Then sort dropdown should be visible