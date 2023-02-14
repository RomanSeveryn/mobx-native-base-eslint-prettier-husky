module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-native'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 1,
  },
};
