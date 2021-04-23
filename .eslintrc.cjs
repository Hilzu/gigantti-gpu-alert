"use strict";

module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {},
  overrides: [
    {
      files: ["*.cjs"],
      parserOptions: { sourceType: "script" },
      rules: { strict: ["error", "global"] },
    },
  ],
};
