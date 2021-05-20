const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const variable = require("./scripts/build/variable");

const config = (env) => {
  const isProd = env.mode === "production";
  const mode = isProd ? "production" : "development";

  // babel とか用
  if (isProd) {
    process.env.NODE_ENV = "production";
  }

  return {
    mode: mode,

    output: { filename: "[name].js", path: resolve("public") },

    entry: {
      index: [
        !isProd && "webpack-dev-server/client",
        resolve("./src/index.tsx"),
      ].filter(Boolean),
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
              },
            },
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },

    devtool: isProd ? false : "eval-source-map",

    devServer: {
      historyApiFallback: true,
      hotOnly: true,
    },

    resolve: { extensions: [".js", ".ts", ".tsx"] },

    plugins: [
      !isProd && new webpack.HotModuleReplacementPlugin(),
      !isProd && new ReactRefreshWebpackPlugin(),

      new webpack.DefinePlugin({
        __APP_NAME__: JSON.stringify(variable.appName),
        __APP_VERSION__: JSON.stringify(variable.appVersion),

        "process.env.NODE_ENV": JSON.stringify(mode),
        __IS_PRODUCTION__: isProd,
      }),
      new HtmlWebpackPlugin({
        template: resolve("src/index.html"),
        inject: false,
      }),
      new CleanWebpackPlugin(),
      isProd &&
        new BundleAnalyzerPlugin({
          analyzerMode: "json",
          reportFilename: resolve("report/bundle-analyzer.json"),
          generateStatsFile: true,
          statsFilename: resolve("report/webpack-stats.json"),
        }),
    ].filter(Boolean),
  };
};

module.exports = config;
