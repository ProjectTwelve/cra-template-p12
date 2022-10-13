const path = require('path');
const prettierOptions = require(path.resolve(__dirname, '.prettierrc.js'));

module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript', 'prettier'],
  plugins: ['react-hooks', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    complexity: ['error', 50],
    'max-params': ['error', 5],
    'max-nested-callbacks': ['error', 5],
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    'prettier/prettier': ['error', prettierOptions],
  },
  ignorePatterns: ['*.test.tsx'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['off', prettierOptions] },
    },
  ],
};
