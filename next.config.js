const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const { appName, appVersion } = require("./scripts/build/variable.js");

module.exports = withPlugins([withBundleAnalyzer], {
  // React StrictMode
  reactStrictMode: true,

  env: {
    APP_NAME: appName,
    APP_VERSION: appVersion,
  },
});
