const { default: plugin } = require('tailwindcss');

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['solid'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/typescript',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/assets', 'src/src_generated', 'src/index.css'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prefer-const': ['error'],
    'no-console': ['error'],
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error'
  }
};
