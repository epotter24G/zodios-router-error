module.exports = {
  env: {
    node: true,
  },
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['generated/*', 'dist/*'],
  plugins: ['@typescript-eslint', 'prettier'],
};
