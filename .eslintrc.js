module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["react-hooks", "react", "@typescript-eslint"],
  rules: {
    "react/destructuring-assignment": ["off"],
    "arrow-body-style": 0
  }
};
