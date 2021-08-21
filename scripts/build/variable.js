const { resolve } = require("path");
const { version: appVersion } = require(resolve("./package.json"));

const appName = "Kcm2Cale";

module.exports = {
  appName,
  appVersion,
};
