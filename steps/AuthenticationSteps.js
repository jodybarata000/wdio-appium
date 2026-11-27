import { Given, Then, When } from '@cucumber/cucumber';
import { account, backpack, incorrectPassword } from '../test-data/sample.js';

Given('user is on the Login page', async function () {
  await this.pages.login.waitForForm();
});

Given('user is on the PRODUCTS page', async function () {
  await this.pages.login.login(account.username, account.password);
  await this.pages.products.waitForCatalog();
});

When('user enters valid credentials', async function () {
  await this.pages.login.enterCredentials(account.username, account.password);
});

When('user enters the valid username and an incorrect password', async function () {
  await this.pages.login.enterCredentials(account.username, incorrectPassword);
});

When('user taps the LOGIN button', async function () {
  await this.pages.login.submit();
});

Then('user sees the Sauce Labs Backpack in the product catalog', async function () {
  await this.pages.products.waitForCatalog();
  await this.pages.products.waitForProduct(backpack);
});

Then('user sees the "Username and password do not match" error message', async function () {
  await this.pages.login.waitForInvalidCredentials();
});

Then('user remains on the Login page', async function () {
  await this.pages.login.waitForForm();
});

When('user taps the LOGIN button without entering a username', async function () {
  await this.pages.login.submit();
});

When('user enters username {string}', async function (username) {
  await this.pages.login.enterUsername(username);
});

When('user taps the LOGIN button without entering a password', async function () {
  await this.pages.login.submit();
});

Then('user sees the login validation message {string}', async function (message) {
  await this.pages.login.waitForValidationError(message);
});

When('user opens the Menu', async function () {
  await this.pages.menu.openMenu();
});

When('user taps the LOGOUT button', async function () {
  await this.pages.menu.logout();
});

Then('user sees the Login page', async function () {
  await this.pages.login.waitForForm();
});
