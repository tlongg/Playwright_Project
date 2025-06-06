const { When, Given, Then } = require("@cucumber/cucumber");
const playwright = require("@playwright/test");
const { BasePage } = require("../../core/BasePage.js");
const config = require("../../cucumber.js");

Given(
  "The user goes to homepage and clicks on Support for you calculator tab",
  { timeout: 100 * 1000 },
  async function () {
    const browser = await playwright.chromium.launch({
      headless: false,
      args: ["--start-maximized"],
    });
    const context = await browser.newContext({
      viewport: null, // disables Playwright’s default 1280x720 viewport
    });
    const page = await context.newPage();
    this.basePage = new BasePage(page);
    const homePage = this.basePage.getHomePage();
    console.log("baseURL", config.default.baseURL);
    await homePage.navigateToHomePage(config.default.baseURL);
    await homePage.clickSupportCalcBlock();
  }
);

When(
  "The user clicks on Start button",
  { timeout: 100 * 1000 },
  async function () {
    const supportCalcPage = this.basePage.getSupportCalcPage();

    await supportCalcPage.clickStartBtn();
  }
);

When(
  "The user fills in Your Information form with age is {int}, recent AI is {string}, housing type is {string}, property AV is {string}, property ownership is {string}, owns more than one property is {string}",
  { timeout: 100 * 1000 },
  async function (
    age,
    recentAI,
    housingType,
    propertyAV,
    propertyOwnership,
    ownsMoreThanOneProperty
  ) {
    const supportCalcFormPage = this.basePage.getSupportCalcFormPage();

    await supportCalcFormPage.enterYearOfBirthFromAge(age);
    await supportCalcFormPage.enterRecentAI(recentAI);
    await supportCalcFormPage.enterHousingType(housingType);
    await supportCalcFormPage.enterPropertyAV(propertyAV);
    await supportCalcFormPage.enterPropertyOwnership(propertyOwnership);
    await supportCalcFormPage.enterOwnsMoreThanOnePropertyValue(
      ownsMoreThanOneProperty
    );
    await supportCalcFormPage.clickShowEstimatedBenefitsBtn();
  }
);

Then(
  "Your individual benefits sections show {string}, {string}",
  { timeout: 100 * 1000 },
  async function (assurancePackace25, assurancePackace26) {
    const supportCalcResultPage = this.basePage.getSupportCalcResultPage();
    const currentYear = new Date().getFullYear();
    const nextYear = new Date().getFullYear() + 1;

    await supportCalcResultPage.clickBenefitsYearTab(currentYear);
    await supportCalcResultPage.verifyAssurancePackage(
      currentYear,
      assurancePackace25
    );

    await supportCalcResultPage.clickBenefitsYearTab(nextYear);
    await supportCalcResultPage.verifyAssurancePackage(
      nextYear,
      assurancePackace26
    );
  }
);
