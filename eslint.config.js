import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([

  {
    ignores: [
      'node_modules',
      'dist',
      'playwright-report',
      'test-results',
      '*.log'
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.js'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      //'quotes': ['error', 'double'],
      "no-multiple-empty-lines": "warn",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
]);
