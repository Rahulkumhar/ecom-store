// .eslintrc.js
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "react-hooks", "import", "jsx-a11y"],
  rules: {
    // Add any specific rules or overrides here
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
