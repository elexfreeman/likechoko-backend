module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    browser: false,
    commonjs: true,
    es6: true,
  },
  plugins: ['prettier', 'jest', '@typescript-eslint'],
  extends: ['eslint:recommended', 'prettier', 'plugin:node/recommended', 'plugin:jest/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    node: {
      resolvePaths: ['node_modules/@types'],
      tryExtensions: ['.ts', '.d.ts'],
    },
  },
  rules: {
    'prettier/prettier': 'error',

    'node/exports-style': ['error', 'module.exports'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',

    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=13.0.0',
        ignores: ['modules'],
      },
    ],
    'node/no-unpublished-import': 'off',
    'node/no-extraneous-import': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    curly: 'error',
    'import/no-webpack-loader-syntax': 'off',
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],

    'max-len': ['error', { code: 120, ignoreUrls: true, ignoreComments: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-mixed-operators': 'error',
    'no-unexpected-multiline': 'error',
    'no-var': 'error',
  },
};
