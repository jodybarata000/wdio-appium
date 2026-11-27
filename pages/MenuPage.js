import { BasePage } from './BasePage.js';

export class MenuPage extends BasePage {
  async openMenu() {
    await this.tap('Menu');
  }

  async logout() {
    await this.tap('LOGOUT');
  }
}
