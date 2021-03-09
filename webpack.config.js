const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

const variable = require("./scripts/build/variable");

const config = (env) => {
  const isProd = env.mode === "production";

  const envFilePath = isProd
    ? "./.env/firebase-config.env"
    : "./.env/firebase-config-dev.env";
  dotenv.config({
    path: resolve(envFilePath),
  });

  return {
    mode: env.mode,

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

        __FIREBASE_CONFIG__: process.env.FIREBASE_CONFIG,
      }),
      new HtmlWebpackPlugin({
        template: resolve("src/index.html"),
        inject: false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};

module.exports = config;
