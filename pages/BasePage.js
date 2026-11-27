export class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  byId(label) {
    return this.driver.$(`~test-${label}`);
  }

  byText(text) {
    return this.driver.$(`android=new UiSelector().text(${JSON.stringify(text)})`);
  }

  async visible(element) {
    await element.waitForDisplayed({ timeout: 12000 });
    return element;
  }

  async tap(label) {
    await (await this.visible(this.byId(label))).click();
  }

  async enter(label, value) {
    await (await this.visible(this.byId(label))).setValue(value);
  }

  async hideKeyboard() {
    if (await this.driver.isKeyboardShown()) await this.driver.hideKeyboard();
  }

  async scrollTo(element) {
    const { width, height } = await this.driver.getWindowRect();
    for (let attempt = 0; attempt < 4 && !(await element.isDisplayed()); attempt++) {
      await this.driver.execute('mobile: scrollGesture', {
        left: Math.round(width * 0.1),
        top: Math.round(height * 0.25),
        width: Math.round(width * 0.8),
        height: Math.round(height * 0.6),
        direction: 'down',
        percent: 0.7,
      });
    }
    return this.visible(element);
  }
}
