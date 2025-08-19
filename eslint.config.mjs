// eslint.config.mjs
import js from "@eslint/js";

export default [
  // ignore build + deps
  {
    ignores: ["dist", "node_modules"],
  },

  // base recommended rules
  js.configs.recommended,

  // project settings
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    env: { node: true },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
