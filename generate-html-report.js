// generate-html-report.js
const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "cucumber-report.json", // or 'reports/cucumber-report.json' if you store it in a folder
  output: "playwright-report/index.html",
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);
