const { homePageLocators } = require("./locators/Homepage.locators.js");

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToHomePage(url) {
    await this.page.goto(url);
  }

  async clickSupportCalcBlock() {
    await this.page.locator(homePageLocators.supportCalcBlock).click();
  }
}

module.exports = { HomePage };
