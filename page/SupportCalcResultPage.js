const { expect } = require("@playwright/test");
const {
  supportCalcResultPageLocators,
} = require("./locators/SupportCalcResultPage.locators.js");

class SupportCalcResultPage {
  constructor(page) {
    this.page = page;
  }

  async clickBenefitsYearTab(year) {
    await this.page
      .locator(supportCalcResultPageLocators.benefitsYearTab(year))
      .click();
  }

  async verifyAssurancePackage(year, assurancePackaceCurrentYear) {
    const actualText = await this.page
      .locator(supportCalcResultPageLocators.cashAssurancePackage(year))
      .textContent();
    expect(actualText.trim()).toBe(assurancePackaceCurrentYear);
  }
}

module.exports = { SupportCalcResultPage };
