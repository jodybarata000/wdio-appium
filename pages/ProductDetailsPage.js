import { BasePage } from './BasePage.js';

export class ProductDetailsPage extends BasePage {
  async waitForDetails(name, price) {
    await this.visible(this.byId('BACK TO PRODUCTS'));
    await this.visible(this.byText(name));
    await this.visible(this.byText(price));
  }
}
