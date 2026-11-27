Feature: Checkout

  @smoke
  Scenario: User completes checkout for the backpack
    Given user is on the PRODUCTS page
    And user has added the "Sauce Labs Backpack" to the Cart
    And user is viewing the Cart
    When user taps the CHECKOUT button
    And user enters their first name in the First Name field
    And user enters their last name in the Last Name field
    And user enters their postal code in the Zip/Postal Code field
    And user taps the CONTINUE button
    Then user sees the "Sauce Labs Backpack" in the checkout overview
    When user taps the FINISH button
    Then user sees the order confirmation

  Scenario: User sees required checkout-field messages
    Given user is on the PRODUCTS page
    And user has added the "Sauce Labs Backpack" to the Cart
    And user is viewing the Cart
    When user taps the CHECKOUT button
    And user taps the CONTINUE button
    Then user sees the checkout validation message "First Name is required"
    When user enters their first name in the First Name field
    And user taps the CONTINUE button
    Then user sees the checkout validation message "Last Name is required"
    When user enters their last name in the Last Name field
    And user taps the CONTINUE button
    Then user sees the checkout validation message "Postal Code is required"
