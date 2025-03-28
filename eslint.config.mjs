import autofix from "eslint-plugin-autofix";
import _import from "eslint-plugin-import";
import babel from "@babel/eslint-plugin";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import react from "eslint-plugin-react";
import jsdoc from "eslint-plugin-jsdoc";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
).map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
})), {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
        autofix,
        import: fixupPluginRules(_import),
        "@babel": babel,
        "@typescript-eslint": typescriptEslint,
        "sort-destructure-keys": sortDestructureKeys,
        react,
        jsdoc,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
        },
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "module",
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "tsconfig.json",
            },
        },
    },
    rules: {
        "@typescript-eslint/no-unused-vars": ["error", {
            ignoreRestSiblings: true,
        }],
        "react/react-in-jsx-scope": "off",
        "react/no-unknown-property": ["error", {
            ignore: ["css"],
        }],
        curly: "off",
        intend: "off",
        "object-curly-spacing": ["error", "never"],
        "no-param-reassign": "error",
        "no-tabs": "off",
        "operator-linebreak": ["error", "after", {
            overrides: {
                "?": "before",
                ":": "before",
            },
        }],
        "react/jsx-tag-spacing": ["error", {
            beforeSelfClosing: "always",
        }],
        "react/jsx-sort-props": ["error", {
            reservedFirst: true,
        }],
        "require-atomic-updates": "off",
        "@babel/semi": ["error", "always"],
        "sort-destructure-keys/sort-destructure-keys": ["error", {
            caseSensitive: true,
        }],
        "sort-vars": ["error", {
            ignoreCase: false,
        }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        semi: 2,
        "@typescript-eslint/no-var-requires": "off",
        "import/no-extraneous-dependencies": ["error", {
            devDependencies: true,
        }],
        "import/order": ["error", {
            pathGroups: [{
                pattern: "~/**",
                group: "external",
            }],
        }],
        "no-restricted-imports": ["error", {
            patterns: ["..*"],
        }],
    },
}, {
    files: ["src/**/*"],
    rules: {
        "react/prop-types": "off",
        "react/display-name": "off",
    },
}];