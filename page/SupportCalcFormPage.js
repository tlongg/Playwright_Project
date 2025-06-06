const {
  supportCalcFormPageLocators,
} = require("./locators/SupportCalcFormPage.locators.js");

class SupportCalcFormPage {
  constructor(page) {
    this.page = page;
  }

  async enterYearOfBirthFromAge(age) {
    // Calculate year of birth
    const currentYear = new Date().getFullYear();
    const yearOfBirth = currentYear - age;

    await this.page
      .locator(supportCalcFormPageLocators.yearOfBirthFieldInput)
      .click();
    await this.page
      .locator(supportCalcFormPageLocators.yearOfBirthFieldInput)
      .fill(yearOfBirth.toString());
    await this.page
      .locator(supportCalcFormPageLocators.yearOfBirthFieldInput)
      .press("Enter");
  }

  async enterRecentAI(recentAI) {
    await this.page.locator(supportCalcFormPageLocators.recentAIField).click();
    await this.page
      .locator(supportCalcFormPageLocators.selectValue(recentAI))
      .click();
  }

  async enterHousingType(housingType) {
    await this.page
      .locator(supportCalcFormPageLocators.housingTypeField)
      .click();
    await this.page
      .locator(supportCalcFormPageLocators.selectValue(housingType))
      .click();
  }

  async enterPropertyAV(propertyAV) {
    await this.page
      .locator(supportCalcFormPageLocators.propertyAVField)
      .click();
    await this.page
      .locator(supportCalcFormPageLocators.selectValue(propertyAV))
      .click();
  }

  async enterPropertyOwnership(propertyAV) {
    await this.page
      .locator(supportCalcFormPageLocators.propertyOwnershipField)
      .click();
    await this.page
      .locator(supportCalcFormPageLocators.selectValue(propertyAV))
      .click();
  }

  async enterOwnsMoreThanOnePropertyValue(ownsMoreThanOneProperty) {
    await this.page
      .locator(
        supportCalcFormPageLocators.ownsMoreThanOnePropertyValue(
          ownsMoreThanOneProperty
        )
      )
      .check();
  }

  async clickShowEstimatedBenefitsBtn() {
    await this.page
      .locator(supportCalcFormPageLocators.showEstimatedBenefitsBtn)
      .click();
  }
}

module.exports = { SupportCalcFormPage };
