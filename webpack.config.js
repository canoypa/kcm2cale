const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

const config = (env) => {
  const isProd = env.mode === "prod";

  dotenv.config({
    path: resolve(`./.env/firebase-config${!isProd && "-dev"}.env`),
  });

  return {
    mode: isProd ? "production" : "development",

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
        __FIREBASE_CONFIG__: JSON.stringify({
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASUREMENT_ID,
        }),
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
