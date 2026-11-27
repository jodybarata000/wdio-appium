import { BasePage } from './BasePage.js';

export class ProductsPage extends BasePage {
  async waitForCatalog() {
    await this.visible(this.byId('PRODUCTS'));
  }

  async waitForProduct(name) {
    await this.visible(this.byText(name));
  }

  async sortByPriceAscending() {
    await this.tap('Modal Selector Button');
    await (await this.visible(this.byText('Price (low to high)'))).click();
  }

  async getFirstTwoProductNames() {
    let titles;
    await this.driver.waitUntil(async () => {
      titles = await this.driver.$$('~test-Item title');
      return titles.length >= 2;
    }, { timeout: 12000, timeoutMsg: 'Expected at least two catalog product titles' });
    return Promise.all(titles.slice(0, 2).map((title) => title.getText()));
  }

  async openProduct(name) {
    await (await this.scrollTo(this.byText(name))).click();
  }

  async addProduct(name) {
    const card = this.driver.$(`//*[@text=${JSON.stringify(name)}]/ancestor::*[@content-desc="test-Item"][1]`);
    await (await this.scrollTo(card.$('~test-ADD TO CART'))).click();
  }

  async openCart() {
    await this.tap('Cart');
  }
}
