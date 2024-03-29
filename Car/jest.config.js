module.exports = {
    preset: "react-native",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js", "<rootDir>/jest.setup.js"],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?@?react-native|@react-native-community" +
        "|@react-navigation|react-native-reanimated|@microsoft)",
    ],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}",
        "api-service/**/*.{ts,tsx,js,jsx}",
    ],
};