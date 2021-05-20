module.exports = (api) => {
  const isProd = api.env("production");

  return {
    presets: [
      // 構文変換
      isProd && "@babel/preset-env",
      // React のコンパイル
      ["@babel/preset-react", { runtime: "automatic" }],
    ].filter(Boolean),

    plugins: [
      // fast refresh
      !isProd && "react-refresh/babel",
      // クラス構文
      "@babel/plugin-proposal-class-properties",
      // スプレッド構文
      "@babel/plugin-proposal-object-rest-spread",
    ].filter(Boolean),
  };
};
