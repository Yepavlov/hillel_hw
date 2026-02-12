import js from "@eslint/src";
import globals from "globals";
import {defineConfig} from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{src,mjs,cjs}"],
        plugins: {js},
        extends: ["src/recommended"],
        languageOptions: {globals: globals.browser}
    },
]);
