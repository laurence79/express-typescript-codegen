module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/prettier'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json']
  },
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // codelens does this for us
    '@typescript-eslint/lines-between-class-members': 'off',

    // this is a project to write to the console
    'no-console': 'off'
  }
};
