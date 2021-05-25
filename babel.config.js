module.exports = (api) => {
  const env = api.env();

  const isProd = env === "production";
  const isDev = env === "development";

  return {
    presets: [
      // 構文変換
      isProd && "@babel/preset-env",
      // React のコンパイル
      ["@babel/preset-react", { runtime: "automatic" }],
    ].filter(Boolean),

    plugins: [
      // fast refresh
      isDev && "react-refresh/babel",
      // クラス構文
      "@babel/plugin-proposal-class-properties",
      // スプレッド構文
      "@babel/plugin-proposal-object-rest-spread",
    ].filter(Boolean),

    env: {
      // テスト
      test: {
        presets: [
          // commonjs に変換
          ["@babel/preset-env", { modules: "commonjs" }],
          // TypeScript 型を削除
          "@babel/preset-typescript",
        ],
      },
    },
  };
};
