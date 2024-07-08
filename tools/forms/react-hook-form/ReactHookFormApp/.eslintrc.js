module.exports = {
  root: true,
  extends: ["universe/native"],
  overrides: [
    {
      files: ["*.{js,jsx,ts,tsx}"],
      rules: {
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-alert": "warn",
        "prettier/prettier": ["error", {
          endOfLine: "auto",
          singleQuote: true,
          jsxSingleQuote: true,
        }],
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'jsx-quotes': ['error', 'prefer-single'],
      },
    },
  ],
};
