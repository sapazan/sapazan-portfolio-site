/**
 * @type {import('prettier').Config}
 */

export default {
  trailingComma: "es5",
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: "auto",
  tailwindFunctions: ["clsx"],
  plugins: ["prettier-plugin-tailwindcss"],
};
