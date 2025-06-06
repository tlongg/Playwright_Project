const envName = process.env.TEST_ENV || "prod";

// Dynamic require of environment config file
const env = require(`./env/${envName}.env.js`);

module.exports = {
  default: {
    require: ["./features/step-definitions/*.js", "./support/*.js"],
    format: ["progress"],
    paths: ["features/*.feature"],
    baseURL: env.baseURL,
  },
};
