import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

import eslintReact from "eslint-plugin-react";
import eslintJsxA11y from "eslint-plugin-jsx-a11y";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/**
 * @type {import('eslint').Linter.Config}
 */
export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginImport.flatConfigs.recommended,
      eslintReact.configs.flat.recommended,
      eslintReact.configs.flat["jsx-runtime"],
      eslintJsxA11y.flatConfigs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      prettier: eslintPluginPrettier,
    },
    settings: {
      "jsx-a11y": {
        polymorphicPropName: "as",
      },
      "import/resolver": {
        node: {
          extensions: [".tsx", ".ts", ".jsx", ".js"],
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-empty-object-type": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", ["sibling", "parent"]],
        },
      ],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      ...eslintPluginPrettierRecommended.rules,
    },
  },
);
