const { appName, appVersion } = require("./scripts/build/variable.js");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // React StrictMode
  reactStrictMode: true,

  env: {
    APP_NAME: appName,
    APP_VERSION: appVersion,
    IS_PRODUCTION: isProd,
  },
};
