Feature: Shopping cart

  Scenario: User adds and removes the backpack from the Cart
    Given user is on the PRODUCTS page
    When user adds the "Sauce Labs Backpack" to the Cart
    And user opens the Cart
    Then user sees the "Sauce Labs Backpack" in the Cart
    When user taps the REMOVE button
    Then user sees that the Cart is empty
