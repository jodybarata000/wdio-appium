import assert from 'node:assert/strict';
import { Then, When } from '@cucumber/cucumber';

When(/^user selects the "Price \(low to high\)" sort option$/, async function () {
  await this.pages.products.sortByPriceAscending();
});

Then('user sees {string} before {string} in the product catalog', async function (first, second) {
  assert.deepEqual(await this.pages.products.getFirstTwoProductNames(), [first, second]);
});

When('user opens {string} from the product catalog', async function (name) {
  await this.pages.products.openProduct(name);
});

Then('user sees {string} priced at {string} on the product details page', async function (name, price) {
  await this.pages.productDetails.waitForDetails(name, price);
});
