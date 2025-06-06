const supportCalcFormPageLocators = {
  yearOfBirthFieldInput: "input[aria-labelledby='personalInfo.yearOfBirth']",
  recentAIField: "div[id='personalInfo.assessableIncome-container']",
  selectValue: (value) => `//div[text()="${value}"]`,
  housingTypeField: "div[id='property.typeOfPropertyOfResidence-container']",
  propertyAVField: "div[id='property.annualValue-container']",
  propertyOwnershipField:
    "div[id='property.ownsPropertyOfResidence-container']",
  ownsMoreThanOnePropertyValue: (value) =>
    `//span[text()="${value}"]//parent::label`,
  showEstimatedBenefitsBtn:
    "//span[text()='Show estimated benefits']//parent::button",
};

module.exports = { supportCalcFormPageLocators };
