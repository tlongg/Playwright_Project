const { HomePage } = require("../page/HomePage");
const { SupportCalcPage } = require("../page/SupportCalcPage");
const { SupportCalcFormPage } = require("../page/SupportCalcFormPage");
const { SupportCalcResultPage } = require("../page/SupportCalcResultPage");

class BasePage {
  constructor(page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.supportCalcPage = new SupportCalcPage(this.page);
    this.supportCalcFormPage = new SupportCalcFormPage(this.page);
    this.supportCalcResultPage = new SupportCalcResultPage(this.page);
  }

  getHomePage() {
    return this.homePage;
  }

  getSupportCalcPage() {
    return this.supportCalcPage;
  }

  getSupportCalcFormPage() {
    return this.supportCalcFormPage;
  }

  getSupportCalcResultPage() {
    return this.supportCalcResultPage;
  }
}

module.exports = { BasePage };
