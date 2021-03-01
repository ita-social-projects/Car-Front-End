module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react-hooks/recommended"
    ],
    rules: {
        indent: [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": "first",
                "MemberExpression": 1,
                "ArrayExpression": 1
            }
        ],
        "no-loop-func": "error",
        "array-bracket-spacing": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "object-curly-spacing": ["error", "always"],
        "no-duplicate-imports": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "newline-after-var": ["error", "always"],
        "newline-before-return": "error",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }]
    }
};