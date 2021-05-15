const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require("webpack");

const variable = require("./scripts/build/variable");

const config = (env) => {
  const isProd = env.mode === "production";
  const mode = isProd ? "production" : "development";

  return {
    mode: mode,

    output: { filename: "[name].js", path: resolve("public") },

    entry: {
      index: resolve("./src/index.tsx"),
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /(node_modules)/,
          use: ["babel-loader", "ts-loader"],
        },
      ],
    },

    devtool: isProd ? false : "source-map",

    resolve: { extensions: [".js", ".ts", ".tsx"] },

    plugins: [
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
      new BundleAnalyzerPlugin({
        analyzerMode: "json",
        reportFilename: resolve("report/bundle-analyzer.json"),
        generateStatsFile: true,
        statsFilename: resolve("report/webpack-stats.json"),
      }),
    ],
  };
};

module.exports = config;
