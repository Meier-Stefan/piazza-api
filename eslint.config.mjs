import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

// Tell the linter that prettier is installed as formatter. More about the difference between linter and formatter here: https://prettier.io/docs/en/comparison
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];