module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'sort-keys-fix', 'better-styled-components'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'better-styled-components/sort-declarations-alphabetically': 2,
    'prettier/prettier': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};
