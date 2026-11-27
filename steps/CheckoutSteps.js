import { Then, When } from '@cucumber/cucumber';
import { backpack, customer } from '../test-data/sample.js';

When('user taps the CHECKOUT button', async function () {
  await this.pages.cart.checkout();
});

When('user enters their first name in the First Name field', async function () {
  await this.pages.checkout.enterFirstName(customer.firstName);
});

When('user enters their last name in the Last Name field', async function () {
  await this.pages.checkout.enterLastName(customer.lastName);
});

When(/^user enters their postal code in the Zip\/Postal Code field$/, async function () {
  await this.pages.checkout.enterPostalCode(customer.postalCode);
});

When('user taps the CONTINUE button', async function () {
  await this.pages.checkout.continue();
});

Then('user sees the {string} in the checkout overview', async function (name) {
  await this.pages.checkout.waitForOverview(name);
});

When('user taps the FINISH button', async function () {
  await this.pages.checkout.finishOrder();
});

Then('user sees the order confirmation', async function () {
  await this.pages.checkout.waitForConfirmation();
});

Then('user sees the checkout validation message {string}', async function (message) {
  await this.pages.checkout.waitForValidationError(message);
});
