const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const { version } = require('./package.json')

module.exports = withBundleAnalyzer({
  // TODO: remove after migrate to App Router
  // https://nextjs.org/docs/pages/api-reference/next-config-js/reactStrictMode
  reactStrictMode: true,

  output: 'export',

  env: {
    APP_NAME: 'Kcm2Cale',
    APP_VERSION: version,
  },
})
