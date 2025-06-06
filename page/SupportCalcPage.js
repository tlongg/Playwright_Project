const {
  supportCalcPageLocators,
} = require("./locators/SupportCalcPage.locators.js");

class SupportCalcPage {
  constructor(page) {
    this.page = page;
  }

  async clickStartBtn() {
    await this.page.locator(supportCalcPageLocators.startBtn).click();
  }
}

module.exports = { SupportCalcPage };
