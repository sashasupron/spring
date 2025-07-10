import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import unicorn from 'eslint-plugin-unicorn';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginImport from 'eslint-plugin-import';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      js,
      unicorn,
      perfectionist,
      import: eslintPluginImport
    },
    extends: [
      'js/recommended',
      'plugin:unicorn/recommended',
      'plugin:import/recommended',
      'plugin:perfectionist/recommended-natural'
    ],
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'prefer-const': 'warn',

      'unicorn/prefer-query-selector': 'warn',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['^[A-Z].*\\.jsx?$']
        }
      ],

      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always'
        }
      ],

      'perfectionist/sort-imports': 'warn',
      'perfectionist/sort-objects': 'warn'
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginReact.configs.flat.recommended
]);
