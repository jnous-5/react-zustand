// @ts-check

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import * as importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            importPlugin.flatConfigs?.recommended,
            importPlugin.flatConfigs?.typescript,
            reactPlugin.configs.flat.recommended,
            reactPlugin.configs.flat['jsx-runtime'],
        ],
        files: ['**/*.{ts,tsx}'],
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react/jsx-sort-props': ['error'],
        },
    },
    eslintConfigPrettier,
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
);
