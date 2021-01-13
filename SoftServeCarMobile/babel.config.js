module.exports = {
  plugins: [
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    // ["@babel/plugin-proposal-class-properties", { "loose": true }],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
