import { After, Before, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage.js';
import { MenuPage } from '../pages/MenuPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { ProductDetailsPage } from '../pages/ProductDetailsPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { startAndroidSession } from './android.js';

setDefaultTimeout(120000);

Before({ timeout: 150000 }, async function () {
  this.driver = await startAndroidSession();
  this.pages = {
    login: new LoginPage(this.driver),
    menu: new MenuPage(this.driver),
    products: new ProductsPage(this.driver),
    productDetails: new ProductDetailsPage(this.driver),
    cart: new CartPage(this.driver),
    checkout: new CheckoutPage(this.driver),
  };
});

After({ timeout: 250000 }, async function ({ result }) {
  if (!this.driver) return;
  const failed = result?.status !== Status.PASSED;
  try {
    if (failed) {
      const screenshot = await this.driver.takeScreenshot();
      await this.attach(Buffer.from(screenshot, 'base64'), { mediaType: 'image/png', fileName: 'failure.png' });
    }
  } catch (error) {
    console.error('Could not attach failure screenshot:', error.message);
  } finally {
    try {
      await this.driver.deleteSession();
    } catch (error) {
      if (!failed) throw error;
      console.error('Could not close Appium session:', error.message);
    }
  }
});
