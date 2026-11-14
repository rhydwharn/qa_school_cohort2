
Feature: Sample Test

@regression
    Scenario: Check site is available
        Given I am on the home page
        When I click on login
        Then I should see login page
            