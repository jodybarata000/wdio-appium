import { BasePage } from './BasePage.js';

export class CheckoutPage extends BasePage {
  async enterFirstName(value) {
    await this.enter('First Name', value);
  }

  async enterLastName(value) {
    await this.enter('Last Name', value);
  }

  async enterPostalCode(value) {
    await this.enter('Zip/Postal Code', value);
  }

  async continue() {
    await this.hideKeyboard();
    await (await this.scrollTo(this.byId('CONTINUE'))).click();
  }

  async waitForValidationError(message) {
    await this.visible(this.byText(message));
  }

  async waitForOverview(name) {
    await this.visible(this.byId('CHECKOUT: OVERVIEW'));
    await this.visible(this.byText(name));
  }

  async finishOrder() {
    await (await this.scrollTo(this.byId('FINISH'))).click();
  }

  async waitForConfirmation() {
    await this.visible(this.byId('CHECKOUT: COMPLETE!'));
    await this.visible(this.byText('THANK YOU FOR YOU ORDER'));
  }
}
