Feature: Product catalog

  Scenario: User sees products sorted from lowest to highest price
    Given user is on the PRODUCTS page
    When user selects the "Price (low to high)" sort option
    Then user sees "Sauce Labs Onesie" before "Sauce Labs Bike Light" in the product catalog

  Scenario: User views product details
    Given user is on the PRODUCTS page
    When user opens "Sauce Labs Bike Light" from the product catalog
    Then user sees "Sauce Labs Bike Light" priced at "$9.99" on the product details page
