import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("universe/native"), {
    files: ["**/*.{js,jsx,ts,tsx}"],

    rules: {
        "no-console": ["error", {
            allow: ["warn", "error"],
        }],

        "no-alert": "warn",

        "prettier/prettier": ["error", {
            endOfLine: "auto",
            singleQuote: true,
            jsxSingleQuote: true,
        }],

        quotes: ["error", "single", {
            avoidEscape: true,
        }],

        "jsx-quotes": ["error", "prefer-single"],
    },
}];