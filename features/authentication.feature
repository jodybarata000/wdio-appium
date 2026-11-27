Feature: Authentication

  @smoke
  Scenario: User signs in with valid credentials
    Given user is on the Login page
    When user enters valid credentials
    And user taps the LOGIN button
    Then user sees the Sauce Labs Backpack in the product catalog

  Scenario: User sees an error after entering an incorrect password
    Given user is on the Login page
    When user enters the valid username and an incorrect password
    And user taps the LOGIN button
    Then user sees the "Username and password do not match" error message
    And user remains on the Login page

  Scenario: User sees required login-field messages
    Given user is on the Login page
    When user taps the LOGIN button without entering a username
    Then user sees the login validation message "Username is required"
    When user enters username "standard_user"
    And user taps the LOGIN button without entering a password
    Then user sees the login validation message "Password is required"

  Scenario: User signs out
    Given user is on the PRODUCTS page
    When user opens the Menu
    And user taps the LOGOUT button
    Then user sees the Login page
