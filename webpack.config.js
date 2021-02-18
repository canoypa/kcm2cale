const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = (env) => {
  const isProd = env.mode === "prod";

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
      new HtmlWebpackPlugin({
        template: resolve("src/index.html"),
        inject: false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};

module.exports = config;
