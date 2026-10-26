import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
    { ignores: ["build"] },
    js.configs.recommended,
    react.configs.flat.recommended,
    react.configs.flat["jsx-runtime"],
    reactHooks.configs.flat.recommended,
    prettier,
    {
        files: ["src/**/*.{js,jsx}"],
        languageOptions: { globals: globals.browser },
        settings: { react: { version: "detect" } },
        rules: { "react/prop-types": "off" },
    },
];
