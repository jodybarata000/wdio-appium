import { Given, Then, When } from '@cucumber/cucumber';

Given('user has added the {string} to the Cart', async function (name) {
  await this.pages.products.addProduct(name);
});

Given('user is viewing the Cart', async function () {
  await this.pages.products.openCart();
  await this.pages.cart.waitForCart();
});

When('user adds the {string} to the Cart', async function (name) {
  await this.pages.products.addProduct(name);
});

When('user opens the Cart', async function () {
  await this.pages.products.openCart();
  await this.pages.cart.waitForCart();
});

Then('user sees the {string} in the Cart', async function (name) {
  await this.pages.cart.waitForProduct(name);
});

When('user taps the REMOVE button', async function () {
  await this.pages.cart.removeProduct();
});

Then('user sees that the Cart is empty', async function () {
  await this.pages.cart.waitForEmpty();
});
