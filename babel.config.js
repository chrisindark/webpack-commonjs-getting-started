module.exports = {
  compact: true,
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "dynamic-import-webpack",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-modules-commonjs",
  ],
};
