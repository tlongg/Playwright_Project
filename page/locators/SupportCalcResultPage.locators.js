const supportCalcResultPageLocators = {
  benefitsYearTab: (value) => `//button[span[text()='${value}']]`,
  cashAssurancePackage: (value) =>
    `(//span[text()='Cash - Assurance Package']//following::span[@id='${value}-You-payout'])[1]`,
};

module.exports = { supportCalcResultPageLocators };
