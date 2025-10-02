module.exports = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      next: require("@next/eslint-plugin-next"),
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "prettier/prettier": "error",
    },
  },
];
