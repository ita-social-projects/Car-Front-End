module.exports = {
  plugins: [
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-transform-flow-strip-types",
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
