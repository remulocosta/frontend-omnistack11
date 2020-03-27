module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'

],
globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'import-helpers',
    'react',
    'prettier'
  ],
  rules: {
    "no-alert": "off",
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn',
      { extensions: ['.jsx', 'js']}
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': [0, 'always'],
    'react/static-property-placement': [0, 'always'],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^react/',
          'module',
          '/^@shared/',
          '/^~/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
