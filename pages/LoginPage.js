import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage {
  async waitForForm() {
    await this.visible(this.byId('Username'));
    await this.visible(this.byId('Password'));
    await this.visible(this.byId('LOGIN'));
  }

  async enterUsername(username) {
    await this.enter('Username', username);
  }

  async enterCredentials(username, password) {
    await this.enterUsername(username);
    await this.enter('Password', password);
  }

  async submit() {
    await this.hideKeyboard();
    await this.tap('LOGIN');
  }

  async login(username, password) {
    await this.enterCredentials(username, password);
    await this.submit();
  }

  async waitForValidationError(message) {
    await this.visible(this.byText(message));
  }

  async waitForInvalidCredentials() {
    await this.visible(this.driver.$('android=new UiSelector().textContains("Username and password do not match")'));
  }
}
