import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js"],
    rules: {
      semi: "error",
    },
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
];
