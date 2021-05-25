module.exports = {
    preset: "react-native",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|react-native-reanimated)",
    ],
};