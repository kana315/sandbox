module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint", "react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: "./"
  },
  root: true,
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "eol-last": ["error", "always"],
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
    "newline-before-return": "error",
    "no-dupe-class-members": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-spread": "error",
    "require-yield": "error"
  }
};
