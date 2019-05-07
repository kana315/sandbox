module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:react-app/recommended",
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
    "@typescript-eslint/no-explicit-any": 0
  }
};
