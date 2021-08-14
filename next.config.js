const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const { appName, appVersion } = require("./scripts/build/variable.js");

const isProd = process.env.NODE_ENV === "production";

module.exports = withPlugins([withBundleAnalyzer], {
  // React StrictMode
  reactStrictMode: true,

  env: {
    APP_NAME: appName,
    APP_VERSION: appVersion,
    IS_PRODUCTION: isProd,
  },
});
