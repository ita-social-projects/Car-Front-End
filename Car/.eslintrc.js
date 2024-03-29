module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
    ],
    plugins: [
        "@typescript-eslint",
        "unused-imports",
    ],
    rules: {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": "first",
                "MemberExpression": 1,
                "ArrayExpression": 1,
            }
        ],
        "max-len": [
            "error",
            {
                "ignorePattern": "^\\s*import",
                "code": 120,
            }
        ],
        "no-loop-func": "error",
        "array-bracket-spacing": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "object-curly-spacing": ["error", "always"],
        "space-before-function-paren": "error",
        "no-duplicate-imports": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "off",
        "newline-after-var": ["error", "always"],
        "newline-before-return": "error",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
        "no-multi-spaces": "error",
        "no-invalid-this": "error",
        "no-await-in-loop": "error",
        "no-extra-boolean-cast": "error",
        "no-unreachable": "error",
        "no-magic-numbers": "error",
        "no-redeclare": "error",
        "no-return-await": "error",
        "no-return-assign": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-useless-rename": "error",
        "no-trailing-spaces": "error",
        "react/prefer-stateless-function": "error",
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
        "react/no-children-prop": "off",
        "unused-imports/no-unused-imports": "error",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "@typescript-eslint/no-unused-vars": "error",
    },
    "overrides": [{
        "files": [
            "*Style.tsx",
            "Constants.tsx",
            "LocationHelperFunctions.ts",
            "*-test.tsx",
            "JourneyConstants.tsx",
            "StylesConstants.tsx",
            ".eslintrc.js"
        ],
        "rules": {
            "no-magic-numbers": "off",
            "unused-imports/no-unused-vars": "off",
            "max-len": "off",
        },
    },]
};