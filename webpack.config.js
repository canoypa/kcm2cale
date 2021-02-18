const { resolve } = require("path");

const config = (env) => {
  const isProd = env.mode === "prod";

  return {
    mode: isProd ? "production" : "development",

    output: { filename: "[name].js", path: resolve("build") },

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

    devtool: "source-map",

    resolve: { extensions: [".js", ".ts", ".tsx"] },
  };
};

module.exports = config;
