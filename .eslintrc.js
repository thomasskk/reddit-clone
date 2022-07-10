module.exports = {
  root: true,
  env: {
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [],
  rules: {
    'import/no-unresolved': 'off',
    'no-empty-function': 'off',
    semi: 0,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    curly: ['warn', 'all'],
  },
  ignorePatterns: ['dist', 'examples', 'scripts', '.next'],
}
