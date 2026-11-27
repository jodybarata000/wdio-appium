import { BasePage } from './BasePage.js';

export class CartPage extends BasePage {
  async waitForCart() {
    await this.visible(this.byId('Cart Content'));
  }

  async waitForProduct(name) {
    await this.visible(this.byText(name));
  }

  async removeProduct() {
    await this.tap('REMOVE');
  }

  async waitForEmpty() {
    await this.byId('Item').waitForExist({ reverse: true, timeout: 12000 });
    await this.waitForCart();
  }

  async checkout() {
    await (await this.scrollTo(this.byId('CHECKOUT'))).click();
  }
}
